import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Dimensions,
} from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';

const background = require('./src/assets/background.png');
const { height } = Dimensions.get('window');

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShow(false);
      Keyboard.dismiss();
    });

    return keyboardDidHideListener.remove;
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode="cover" style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyBoardContainer}
        >
          {activeScreen === 0 ? (
            <LoginScreen
              activeScreen={activeScreen}
              isKeyboardShow={isKeyboardShow}
              setIsKeyboardShow={setIsKeyboardShow}
              setActiveScreen={setActiveScreen}
            />
          ) : (
            <RegistrationScreen
              activeScreen={activeScreen}
              isKeyboardShow={isKeyboardShow}
              setIsKeyboardShow={setIsKeyboardShow}
              setActiveScreen={setActiveScreen}
            />
          )}
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyBoardContainer: {
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    height,
    justifyContent: 'flex-end',
  },
});

export default App;
