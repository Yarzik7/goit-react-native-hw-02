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
  await createUserWithEmailAndPassword(auth, email, password).catch(error => console.log(error.message));
  await updateUserProfile({ displayName }).catch(() => console.log('Не вдалося оновити дані користувача'));
  await loginDB({ email, password }).catch(() =>
    console.log('Не вдалося увійти в аккаунт після реєстрації. Спробуйте увійти ще раз')
  );
  await authStateChanged();
};

export { registerDB, loginDB, authStateChanged, updateUserProfile, logOut };
