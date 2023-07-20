import { StyleSheet, View, Text } from 'react-native';
import Avatar from '../components/Avatar';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import { useState } from 'react';

const RegistrationScreen = ({ isKeyboardShow, activeScreen, setActiveScreen, setIsKeyboardShow }) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Avatar isKeyboardShow={isKeyboardShow} />

      <Text style={styles.title}>Реєстрація</Text>

      <View style={styles.authForm}>
        <AuthInput
          type={'text'}
          value={login}
          placeholder={'Логін'}
          onChange={setLogin}
          setIsKeyboardShow={setIsKeyboardShow}
        />

        <AuthInput
          type={'email'}
          value={email}
          placeholder={'Адреса електронної пошти'}
          onChange={setEmail}
          setIsKeyboardShow={setIsKeyboardShow}
        />

        <AuthInput
          type={'password'}
          value={password}
          placeholder={'Пароль'}
          onChange={setPassword}
          setIsKeyboardShow={setIsKeyboardShow}
        />
        <AuthAction activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 32,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
  },
  authForm: {
    width: '100%',
    gap: 16,
    backgroundColor: '#FFFFFF',
  },
});

export default RegistrationScreen;
