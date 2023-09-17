import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';

import Avatar from '../components/Avatar';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import { useState } from 'react';
import color from '../constants/colors';
const { secondaryTextColor } = color;

const RegistrationScreen = ({ activeScreen, setActiveScreen }) => {
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
    <Layout contentContainerStyles={[styles.paddingRegistration]}>
      <Avatar avatarPath={avatarPath} setAvatarPath={setAvatarPath} />

      <Text style={styles.title}>Реєстрація</Text>

      <View style={styles.authForm}>
        <AuthInput type={'text'} value={login} placeholder={'Логін'} onChange={setLogin} />

        <AuthInput
          type={'email'}
          value={email}
          placeholder={'Адреса електронної пошти'}
          onChange={setEmail}
        />

        <AuthInput type={'password'} value={password} placeholder={'Пароль'} onChange={setPassword} />
        <AuthAction onSubmit={onSubmit} activeAuthScreen="Registration" setActiveScreen={setActiveScreen} />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 32,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: secondaryTextColor,
  },
  authForm: {
    width: '100%',
    gap: 16,
  },
  paddingRegistration: {
    paddingBottom: 45,
  },
});

export default RegistrationScreen;
