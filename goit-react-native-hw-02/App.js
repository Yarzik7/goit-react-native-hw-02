import React, { useState, useEffect, } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import RegistrationScreen from './src/components/RegistrationScreen';
import LoginScreen from './src/components/LoginScreen';

const background = require('./src/assets/background.png');
const { OS } = Platform;

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardShow(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardShow(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  // const keyBoardHeight = Keyboard.metrics()?.height || 0;
  // const backgroundGeometry = {
  //   marginBottom: OS === 'android' ? -keyBoardHeight : 0,
  //   paddingBottom: OS === 'android' ? keyBoardHeight : 0,
  // };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={{
          ...styles.image,
        }}
      >
        <KeyboardAvoidingView
          behavior={OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyBoardContainer}
        >
          {activeScreen === 0 ? (
            <LoginScreen
              activeScreen={activeScreen}
              isKeyboardShow={isKeyboardShow}
              setActiveScreen={setActiveScreen}
            />
          ) : (
            <RegistrationScreen
              activeScreen={activeScreen}
              isKeyboardShow={isKeyboardShow}
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
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
});

export default App;