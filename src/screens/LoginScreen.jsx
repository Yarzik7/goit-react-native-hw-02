import { StyleSheet, View, ToastAndroid } from 'react-native';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import AuthLayout from '../components/AuthLayout';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useLoggedInRedirect } from '../hooks/useIsLoggedInRedirect';
import { logIn } from '../redux/auth/operations';
import ScreenLoader from '../components/Loaders/ScreenLoader';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useLoggedInRedirect(isLoggedIn);

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmit = async () => {
    if (!email.trim() || !password.trim()) {
      ToastAndroid.show('Заповніть будь ласка всі поля!', ToastAndroid.SHORT);
      return;
    }

    const userData = { email: email.trim(), password: password.trim() };
    const loginResult = await dispatch(logIn(userData));

    if (loginResult.error) {
      ToastAndroid.show(`Виникла помилка авторизації: ${loginResult.payload.message}`, ToastAndroid.SHORT);
      return;
    }
    reset();
  };

  if (isLoggedIn) {
    return <ScreenLoader />;
  }

  return (
    <AuthLayout contentContainerStyles={[styles.paddingLogin]}>
      <Title title="Увійти" />

      <View style={styles.authForm}>
        <AuthInput
          type={'email'}
          value={email}
          placeholder={'Адреса електронної пошти'}
          onChange={setEmail}
        />

        <AuthInput
          type={'password'}
          value={password}
          autoCapitalize="none"
          placeholder={'Пароль'}
          onChange={setPassword}
        />
        <AuthAction onSubmit={onSubmit} activeAuthScreen="LoginScreen" />
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  authForm: {
    width: '100%',
    gap: 16,
  },
  paddingLogin: {
    paddingBottom: 111,
  },
});

export default LoginScreen;
