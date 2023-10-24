import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config';
import { imagesProcessing } from './firestore';

const logOut = async () => {
  await signOut(auth);
};

const updateUserProfile = async update => {
  const user = auth.currentUser;
  if (user) {
    if (update.photoURL) {
      update.photoURL = await imagesProcessing(update.photoURL, 'avatars/', user.uid + 'Avatar');
    } else if (update.photoURL === null) {
      update.photoURL = '';
    }

    await updateProfile(user, update);

    return update;
  }
};

const loginDB = async ({ email, password }) => await signInWithEmailAndPassword(auth, email, password).user;

const registerDB = async ({ email, password, login: displayName, avatarPath: photoURL = null }) => {
  await createUserWithEmailAndPassword(auth, email, password);

  await updateUserProfile({ displayName, photoURL });
  await loginDB({ email, password });

  const { uid } = auth.currentUser;

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
