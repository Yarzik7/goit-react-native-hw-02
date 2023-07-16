import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from 'react-native';
import RegistrationScreen from './src/components/RegistrationScreen';
import LoginScreen from './src/components/LoginScreen';

const background = require('./src/assets/background.png');

const App = () => {
  const [activeScreen, setActiveScreen] = useState(1);
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  const showKB = () => {
    //setIsKeyboardShow(!isKeyboardShow);
  }

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

  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.image}
      >
        {/* <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyBoardContainer}
        > */}
        {activeScreen === 0 ? (
          <LoginScreen
            setIsKeyboardShow={showKB}
            isKeyboardShow={isKeyboardShow}
            setActiveScreen={setActiveScreen}
          />
        ) : (
          <RegistrationScreen
            setIsKeyboardShow={showKB}
            isKeyboardShow={isKeyboardShow}
            setActiveScreen={setActiveScreen}
          />
        )}
        {/* </KeyboardAvoidingView> */}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyBoardContainer: {
    alignItems: 'flex-end',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    justifyContent: 'flex-end',
  },
});

export default App;

// import React from 'react';
// import {
//   ImageBackground,
//   StyleSheet,
//   View,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import RegistrationScreen from './src/components/RegistrationScreen';
// import LoginScreen from './src/components/LoginScreen';

// const background = require('./src/assets/background.jpg');

// const App = () => (
//     <View style={styles.container}>
//       <ImageBackground
//         source={background}
//         resizeMode="cover"
//         style={styles.image}
//       >
//         <LoginScreen />
//       </ImageBackground>
//     </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     width: '100%',
//   },
// });

// export default App;
