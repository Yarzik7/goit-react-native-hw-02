import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Platform,
  Keyboard,
} from 'react-native';
import addButton from '../assets/add.png';
import { useState } from 'react';

const LoginScreen = ({
  isKeyboardShow,
  setIsKeyboardShow,
  setActiveScreen,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>

      <View style={styles.registerForm}>
        <View>
          <TextInput
            style={styles.inputMailPassw}
            placeholder="Email address"
            inputMode="email"
          />
        </View>

        <View>
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
              </View>
              
        {!isKeyboardShow && (
          <View>
            <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
              <Text style={styles.registerButtonText}>Увійти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginLink}
              onPress={() => setActiveScreen(1)}
            >
              <Text style={styles.loginLinkText}>
                Немає акаунту? Зареєструватися
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
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
  registerForm: {
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
