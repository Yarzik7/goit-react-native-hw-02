import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Avatar from './Avatar';
import AuthInput from './AuthInput';
import AuthAction from './AuthAction';
import { useState } from 'react';

const RegistrationScreen = ({
  isKeyboardShow,
  activeScreen,
  setActiveScreen,
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
          placeholder={'Пароль'}
          onChange={setPassword}
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

{
  /* <View>
          <TextInput
            style={styles.inputLogin}
            placeholder="Login"
            inputMode="text"
          />
        </View>

        <View>
          <TextInput
            style={styles.inputMailPassw}
            placeholder="Email address"
            inputMode="email"
          />
        </View> */
}

{
  /* <View>
          <TextInput
            style={styles.inputMailPassw}
            placeholder="Password"
            secureTextEntry={!isShowPassword}
          />
          <TouchableOpacity
            style={styles.showButton}
            onPress={() => {
              setIsShowPassword(!isShowPassword);
            }}
          >
            <Text style={styles.loginLinkText}>
              {isShowPassword ? 'Приховати' : 'Показати'}
            </Text>
          </TouchableOpacity>
        </View> */
}

{
  /* {!isKeyboardShow && (
          <View>
            <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
              <Text style={styles.registerButtonText}>Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => {
                setActiveScreen(0);
              }}
            >
              <Text style={styles.loginLinkText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        )} */
}
