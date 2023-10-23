import { StyleSheet, View } from 'react-native';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import AuthLayout from '../components/AuthLayout';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useLoggedInRedirect } from '../hooks/useIsLoggedInRedirect';
import { logIn } from '../redux/auth/operations';
import { loginDB } from '../firebase/auth';
import ScreenLoader from '../components/Loaders/ScreenLoader';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('logged ', isLoggedIn);

  // const navigation = useNavigation();
  useLoggedInRedirect(isLoggedIn);

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmit = async () => {
    if (!email || !password) {
      console.log('Заповніть будь ласка всі поля!');
      return;
    }
    const userData = { email, password };
    console.log(userData);
    dispatch(logIn(userData));
    reset();
    // await loginDB(userData);

    // navigation.navigate('BottomTabs', {
    //   screen: 'PostsNavigator',
    //   params: { screen: 'PostsScreen', params: userData },
    // });
  };

  if (isLoggedIn) {
    return <ScreenLoader></ScreenLoader>;
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
