import { StyleSheet, View } from 'react-native';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import AuthLayout from '../components/AuthLayout';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { loginDB } from '../firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

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
    await loginDB(userData);
    reset();
    navigation.navigate('BottomTabs', {
      screen: 'PostsNavigator',
      params: { screen: 'PostsScreen', params: userData },
    });
  };

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
