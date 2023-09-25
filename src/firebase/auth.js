import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../config';

const logOut = async () => {
  signOut(auth)
    .then(async () => {
      // Користувач успішно вийшов з системи
      console.log('Користувач вийшов з системи ', await authStateChanged());
    })
    .catch(error => {
      // Помилка при виході з системи
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
    try {
      await updateProfile(user, update);
      console.log('Користувача було оновлено');
    } catch (error) {
      throw error;
    }
  }
};

const loginDB = async ({ email, password }) => {
  try {
    const {
      user: { displayName, email: userEmail, photoURL, uid },
    } = await signInWithEmailAndPassword(auth, email, password);
    console.log({ displayName, userEmail, photoURL, uid });
    return;
  } catch (error) {
    throw error;
  }
};

const registerDB = async ({ email, password, login: displayName }) => {
  await createUserWithEmailAndPassword(auth, email, password);
  console.log('Користувача зареєстровано');
  await updateUserProfile({ displayName });
  await loginDB({ email, password });
  console.log('Спроба увійти в систему була успішною');
  // await authStateChanged();

  const registeredUserData = {
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email,
    photoURL: auth.currentUser.photoURL,
    uid: auth.currentUser.uid,
  };

  return registeredUserData;
};

export { registerDB, loginDB, authStateChanged, updateUserProfile, logOut };
