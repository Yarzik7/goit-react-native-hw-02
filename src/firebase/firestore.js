import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
  getDocs,
  runTransaction,
  where,
  query,
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../config';
import { uriToBlob } from '../helpers/uriToBlob';

const imagesProcessing = async (image, storeFolder, id) => {
  const blobImage = await uriToBlob(image);
  const filePath = storeFolder + (id || blobImage._data.name);
  const storageRef = ref(storage, filePath);

  try {
    const snapshot = await uploadBytes(storageRef, blobImage);
    console.log('Файл успішно завантажено', snapshot);
    const url = await getDownloadURL(storageRef);
    console.log('Url: ', url);
    return url;
  } catch (error) {
    console.error('Сталася помилка під час завантаження файлу', error);
  }
};

const writeDataToFirestore = async (route, data) => {
  let image = null;
  try {
    if (data.postImage) {
      image = await imagesProcessing(data.postImage, 'postImages/');
      console.log('Img: ', image);
      data.postImage = image;
    }

    const { id } = await addDoc(collection(db, route), data);
    return { id, ...data };
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

const getDataFromFirestore = async ({ route, field = '', value = '' }) => {
  const collectionRef = collection(db, route);
  const queryOptions = value && query(collectionRef, where(field, '==', value));
  try {
    const snapshot = await getDocs(queryOptions || collectionRef);
    // console.log('Collection: ', snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const updateDataInFirestore = async (collectionName, docId, data) => {
  try {
    const ref = doc(db, collectionName, docId);

    await updateDoc(ref, data);
    console.log('document updated');
  } catch (error) {
    console.log(error);
  }
};

const onIncrementCommentCount = async postId => {
  const documentRef = doc(db, 'posts', postId);

  try {
    await runTransaction(db, async transaction => {
      const documentSnapshot = await transaction.get(documentRef);
      if (documentSnapshot.exists()) {
        const currentNumber = documentSnapshot.data().commentsCount;
        const updatedNumber = currentNumber + 1;
        transaction.update(documentRef, { commentsCount: updatedNumber });
      }
    });
    console.log('Значення оновлено успішно');
  } catch (error) {
    console.error('Помилка оновлення значення: ', error);
  }
};

// /**
//  * Function to convert a URI to a Blob object
//  * @param {string} uri - The URI of the file
//  * @returns {Promise} - Returns a promise that resolves with the Blob object
//  */
// export function uriToBlob(uri) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     // If successful -> return with blob
//     xhr.onload = function () {
//       resolve(xhr.response);
//     };
//     // reject on error
//     xhr.onerror = function () {
//       reject(new Error('uriToBlob failed'));
//     };

//     // Set the response type to ‘blob’ - this means the server’s response
//     // will be accessed as a binary object
//     xhr.responseType = 'blob';

//     // Initialize the request. The third argument set to ‘true’ denotes
//     // that the request is asynchronous
//     xhr.open('GET', uri, true);

//     // Send the request. The ‘null’ argument means that no body content is given for the request
//     xhr.send(null);
//   });
// }

export function makePath(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export {
  updateDataInFirestore,
  getDataFromFirestore,
  writeDataToFirestore,
  onIncrementCommentCount,
  imagesProcessing,
};
