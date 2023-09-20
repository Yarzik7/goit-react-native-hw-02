import { StyleSheet, View } from 'react-native';
import Title from '../components/Title';
import { useNavigation } from '@react-navigation/native';
import AuthLayout from '../components/AuthLayout';
import Avatar from '../components/Avatar';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import { useState } from 'react';

const RegistrationScreen = () => {
  const [avatarPath, setAvatarPath] = useState(null);
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const reset = () => {
    setLogin('');
    setEmail('');
    setPassword('');
    setAvatarPath(null);
  };

  const onSubmit = () => {
    if (!login || !email || !password) {
      console.log('Заповніть будь ласка всі поля!');
      return;
    }
    const userData = { login, email, password, avatarPath };
    reset();
    navigation.navigate('BottomTabs', { screen: 'Posts', params: userData });
  };

  return (
    <AuthLayout contentContainerStyles={[styles.paddingRegistration]}>
      <Avatar avatarPath={avatarPath} setAvatarPath={setAvatarPath} />

      <Title title="Реєстрація" />

      <View style={styles.authForm}>
        <AuthInput
          type={'text'}
          value={login}
          autoCapitalize="words"
          placeholder={'Логін'}
          onChange={setLogin}
        />

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
        <AuthAction onSubmit={onSubmit} activeAuthScreen="Registration" />
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  authForm: {
    width: '100%',
    gap: 16,
  },
  paddingRegistration: {
    paddingBottom: 45,
  },
});

export default RegistrationScreen;
