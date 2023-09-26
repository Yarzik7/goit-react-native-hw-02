import { collection, addDoc, updateDoc, doc, getDoc, getDocs, runTransaction } from 'firebase/firestore';
import { db } from '../../config';

const writeDataToFirestore = async (route, data) => {
  try {
    const { id } = await addDoc(collection(db, route), data);
    return { id, ...data };
  } catch (e) {
    console.error('Error adding document: ', e);
    throw e;
  }
};

const getDataFromFirestore = async route => {
  try {
    const snapshot = await getDocs(collection(db, 'users'));
    // Перевіряємо у консолі отримані дані
    snapshot.forEach(doc => console.log(`${doc.id} =>`, doc.data()));
    // Повертаємо масив обʼєктів у довільній формі
    return snapshot.map(doc => ({ id: doc.id, data: doc.data() }));
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

export { updateDataInFirestore, getDataFromFirestore, writeDataToFirestore, onIncrementCommentCount };
