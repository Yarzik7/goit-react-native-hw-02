import { StyleSheet, View, Text } from 'react-native';
import Avatar from '../components/Avatar';
import AuthInput from '../components/AuthInput';
import AuthAction from '../components/AuthAction';
import { useState } from 'react';

const RegistrationScreen = ({
  isKeyboardShow,
  activeScreen,
  setActiveScreen,
  setIsKeyboardShow,
}) => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={{ ...styles.container, paddingBottom: isKeyboardShow ? 32 : 45 }}
    >
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
    paddingBottom: 45,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    width: '100%',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
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
});

export default RegistrationScreen;
