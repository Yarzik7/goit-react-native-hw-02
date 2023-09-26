// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from 'firebase/auth';
// import { getStorage } from 'firebase/storage';

// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from 'firebase/auth';
// Функція для підключення бази даних у проект
import { getFirestore } from 'firebase/firestore';
// Функція для підключення сховища файлів в проект
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAP0u4pFTzmVk5FM-TQD900CUTT1LJzhAg',
  authDomain: 'imageposts7.firebaseapp.com',
  projectId: 'imageposts7',
  storageBucket: 'imageposts7.appspot.com',
  messagingSenderId: '262335382633',
  appId: '1:262335382633:web:60e393a805533e9cff0ef8',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// // Get a list of cities from your database
export async function getCities() {
  // console.log('1');
  // const citiesCol = collection(db, 'cities');
  // console.log('2');
  // const citySnapshot = await getDocs(citiesCol);
  // const cityList = citySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  // console.log(cityList);
  // return cityList;
}
