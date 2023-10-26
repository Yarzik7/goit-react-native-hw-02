import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config';
import { imagesProcessing } from './firestore';
import { storage } from '../../config';
import { ref, deleteObject } from 'firebase/storage';
import { uriToBlob } from '../helpers/uriToBlob';

const logOut = async () => {
  await signOut(auth);
};

const updateUserProfile = async update => {
  const user = auth.currentUser;
  if (user) {
    if (update.photoURL) {
      update.photoURL = await imagesProcessing(
        await uriToBlob(update.photoURL),
        'avatars/',
        user.uid + 'Avatar'
      );
    } else if (update.photoURL === null) {
      update.photoURL = '';

      const currentAvatar = auth.currentUser.photoURL;
      const imageRef = ref(storage, currentAvatar);
      await deleteObject(imageRef);
    }

    await updateProfile(user, update);

    return update;
  }
};

const loginDB = async ({ email, password }) =>
  await signInWithEmailAndPassword(auth, email, password).then(res => res.user);

const registerDB = async ({ email, password, login, avatarPath = '' }) => {
  await createUserWithEmailAndPassword(auth, email, password);

  await updateUserProfile({ displayName: login, photoURL: avatarPath });
  await loginDB({ email, password });

  const { uid, displayName, photoURL } = auth.currentUser;

  return {
    user: {
      displayName,
      email,
      photoURL,
      uid,
    },
  };
};

export { registerDB, loginDB, updateUserProfile, logOut };
