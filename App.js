import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/screens/RegistrationScreen';
import LoginScreen from './src/screens/LoginScreen';

const background = require('./src/assets/background.png');

const App = () => {
  const { height } = useWindowDimensions();
  const [activeScreen, setActiveScreen] = useState('signUp');
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={{ height: height * 1.05 }}>
          <ImageBackground source={background} resizeMode="cover" style={styles.image} />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyBoardContainer}
        >
          {activeScreen === 'login' ? (
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
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyBoardContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
  image: {
    height: '100%',
  },
});

export default App;
