import { StyleSheet, View, Text } from 'react-native';
import AuthInput from './AuthInput';
import AuthAction from './AuthAction';
import { useState } from 'react';

const LoginScreen = ({
  isKeyboardShow,
  activeScreen,
  setActiveScreen,
  setIsKeyboardShow,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={{ ...styles.container, paddingBottom: isKeyboardShow ? 32 : 111 }}
    >
      <Text style={styles.title}>Увійти</Text>

      <View style={styles.authForm}>
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

        {!isKeyboardShow && (
          <AuthAction
            activeScreen={activeScreen}
            setActiveScreen={setActiveScreen}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 111,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  containerKeyB: {
    justifyContent: 'flex-end',
  },
  pfotoContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
  },

  addbutton: {
    marginTop: '65%',
    left: '90%',
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'auto',
  },
  addButtonText: {
    fontSize: 20,
    color: '#FF6C00',
    textAlign: 'center',
    lineHeight: 18,
  },
  title: {
    fontWeight: '500',
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
    lineHeight: 35,
  },
  authForm: {
    width: '100%',
    gap: 16,
    backgroundColor: '#FFFFFF',
  },
  inputLogin: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  inputMailPassw: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    position: 'relative',
  },
  inputContainer: {
    width: '100%',
  },
  inputPasswContainer: {
    position: 'relative',
  },
  showButton: {
    ...this.loginLink,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  passwShowText: {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
  },
  passwShow: {
    top: -34,
    left: 130,
  },
  registerButton: {
    backgroundColor: '#FF6C00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: '400',
  },
  loginLink: {
    marginTop: 16,
    marginBottom: 66,
  },
  loginLinkText: {
    color: '#1B4371',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default LoginScreen;
