import { useState } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';
import colors from './src/constants/colors';

const backgroundImage = require('./src/assets/background.jpg');

const App = () => {
  const [activeScreen, setActiveScreen] = useState('signUp');
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={activeScreen === 'login' ? -208 : -142}
        style={styles.container}
      >
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundView}>
          <View style={[styles.authContainer, activeScreen === 'login' && styles.paddingLogin]}>
            {activeScreen === 'login' ? (
              <LoginScreen activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            ) : (
              <RegistrationScreen activeScreen={activeScreen} setActiveScreen={setActiveScreen} />
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authContainer: {
    paddingHorizontal: 16,
    paddingBottom: 45,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  backgroundView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  paddingLogin: {
    paddingBottom: 111,
  },
});

export default App;
