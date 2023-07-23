import { StyleSheet, View, Text } from 'react-native';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import { useState } from 'react';
import color from '../constants/colors';
const { secondaryTextColor } = color;

const LoginScreen = ({ activeScreen, setActiveScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

  

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
        <AuthAction onSubmit={onSubmit} activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
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
    color: secondaryTextColor,
  },
  authForm: {
    width: '100%',
    gap: 16,
  },
});

export default LoginScreen;