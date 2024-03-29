import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
