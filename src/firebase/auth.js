import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithCustomToken
} from 'firebase/auth';
import { auth } from '../../config';
import { imagesProcessing } from './firestore';

const logOut = async () => {
  signOut(auth)
    .then(async () => {
      console.log('Користувач вийшов з системи ', await authStateChanged());
    })
    .catch(error => {
      console.error('Помилка при виході з системи:', error);
    });
};

const authStateChanged = async (onChange = () => {}) => {
  onAuthStateChanged(auth, user => {
    user
      ? console.log(`Користувач ${user.displayName} (${user.uid}) увійшов в систему`)
      : console.log('Користувач не в системі');
  });
};

const updateUserProfile = async update => {
  const user = auth.currentUser;
  if (user) {
    console.log('User: ', user.uid);
    let image = null;
    if (update.photoURL) {
      console.log('In if updProf: ', update.photoURL);
      image = await imagesProcessing(update.photoURL, 'avatars/', user.uid + 'Avatar');
      console.log('ImgAv: ', image);
      update.photoURL = image;
    }
    try {
      await updateProfile(user, update);
      console.log('Користувача було оновлено: ');
      return update;
    } catch (error) {
      throw error;
    }
  }
};

const loginDB = async ({ email, password }) => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

const registerDB = async ({ email, password, login: displayName, avatarPath: photoURL = null }) => {
  await createUserWithEmailAndPassword(auth, email, password);
  console.log('Користувача зареєстровано');
  await updateUserProfile({ displayName, photoURL });
  await loginDB({ email, password });
  console.log('Спроба увійти в систему була успішною');
  await authStateChanged();

  const registeredUserData = {
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email,
    photoURL: auth.currentUser.photoURL,
    uid: auth.currentUser.uid,
  };

  return registeredUserData;
};

export { registerDB, loginDB, authStateChanged, updateUserProfile, logOut };
