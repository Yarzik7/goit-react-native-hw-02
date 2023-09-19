import { StyleSheet, View } from 'react-native';
import Title from '../components/Title';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  const onSubmit = () => {
    if (!email || !password) {
      console.log('Заповніть будь ласка всі поля!');
      return;
    }
    const userData = { email, password };
    console.log(userData);
    reset();
    navigation.navigate('BottomTabs', { screen: 'Posts', params: userData });
  };

  return (
    <Layout contentContainerStyles={[styles.paddingLogin]}>
      <Title title="Увійти" />

      <View style={styles.authForm}>
        <AuthInput
          type={'email'}
          value={email}
          placeholder={'Адреса електронної пошти'}
          onChange={setEmail}
        />

        <AuthInput type={'password'} value={password} placeholder={'Пароль'} onChange={setPassword} />
        <AuthAction onSubmit={onSubmit} activeAuthScreen="Login" />
      </View>
    </Layout>
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
