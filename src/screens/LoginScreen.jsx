import { StyleSheet, View, Text } from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import { useState } from 'react';

const LoginScreen = ({ activeScreen, setActiveScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <Text style={styles.title}>Увійти</Text>

      <View style={styles.authForm}>
        <AuthInput
          type={'email'}
          value={email}
          placeholder={'Адреса електронної пошти'}
          onChange={setEmail}
        />

        <AuthInput type={'password'} value={password} placeholder={'Пароль'} onChange={setPassword} />
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

export default LoginScreen;
