import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  deleteDoc,
  runTransaction,
  where,
  query,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { db, storage } from '../../config';
import { uriToBlob } from '../helpers/uriToBlob';

import moment from 'moment/moment';

const imagesProcessing = async (blobImage, storeFolder, id) => {
  const filePath = storeFolder + (id || blobImage._data.name);
  const storageRef = ref(storage, filePath);

  await uploadBytes(storageRef, blobImage);

  return await getDownloadURL(storageRef);
};

const writeDataToFirestore = async (route, data) => {
  if (data.postImage) {
    data.postImage = await imagesProcessing(await uriToBlob(data.postImage), 'postImages/');
  }

  if (data.commentUserAvatar === null) {
    const blobImage = new Blob([data.commentUserAvatar], { type: 'image/jpg' });
    data.commentUserAvatar = await imagesProcessing(blobImage, 'avatars/', data.author + 'Avatar');
    blobImage.close();
  }

  const { id } = await addDoc(collection(db, route), data);
  return { id, ...data };
};

const getDataFromFirestore = async ({ route, field = '', value = '' }) => {
  const collectionRef = collection(db, route);
  const queryOptions = value && query(collectionRef, where(field, '==', value));

  const snapshot = await getDocs(queryOptions || collectionRef);
  // console.log('snap: ', snapshot.docs[0]);
  // console.log(
  //   'cretTime: ',
  //   snapshot.docs[0]._document.createTime,
  //   'timeParse: ',
  //   moment.unix(snapshot.docs[0]._document.createTime.timestamp.seconds).toISOString() + ' ',
  //   typeof snapshot.docs[0]._document.createTime.timestamp.seconds
  // );
  // console.log('snapTime: ', snapshot.docs[0]._document.readTime, " "+moment.unix(snapshot.docs[0]._document.readTime.timestamp.seconds).toISOString());
  // console.log('snapVers: ', snapshot.docs[0]._document.version, " "+moment.unix(snapshot.docs[0]._document.version.timestamp.seconds).toISOString());
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createTime: doc._document.createTime.timestamp.seconds,
  }));
};

const updateDataInFirestore = async (collectionName, docId, data) =>
  await updateDoc(doc(db, collectionName, docId), data);

const deletePostFromFirestore = async (postId, imageURL) => {
  const postDocRef = doc(db, 'posts', postId);
  const imageRef = ref(storage, imageURL);

  await deleteDoc(postDocRef);

  const commentsRef = collection(db, 'comments');
  const comments = await getDocs(query(commentsRef, where('postId', '==', postId)));

  const deletePostCommentsRequests = [];
  comments.forEach(comment => {
    const commentDocRef = doc(db, 'comments', comment.id);
    deletePostCommentsRequests.push(deleteDoc(commentDocRef));
  });

  Promise.allSettled(deletePostCommentsRequests);

  await deleteObject(imageRef);
};

const onIncrementCommentCount = async (postId, author) => {
  const documentRef = doc(db, 'posts', postId);

  await runTransaction(db, async transaction => {
    const documentSnapshot = await transaction.get(documentRef);
    if (documentSnapshot.exists()) {
      const currentNumber = documentSnapshot.data().commentsCount;
      const currentReviewers = documentSnapshot.data().reviewers;

      const updateData = {
        commentsCount: currentNumber + 1,
      };

      if (!reviewers.includes(author)) {
        currentReviewers.push(author);
        updateData.reviewers = currentReviewers;
      }

      transaction.update(documentRef, updateData);
    }
  });
};

export {
  updateDataInFirestore,
  getDataFromFirestore,
  writeDataToFirestore,
  onIncrementCommentCount,
  imagesProcessing,
  deletePostFromFirestore,
};
