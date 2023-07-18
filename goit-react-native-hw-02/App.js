import React, { useState, useEffect } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import RegistrationScreen from './src/components/RegistrationScreen';
import LoginScreen from './src/components/LoginScreen';

const background = require('./src/assets/background.png');
const { height } = Dimensions.get('window');

const App = () => {
  useEffect(() => {
    const keyboardListenerShow = Keyboard.addListener('keyboardDidShow', () => {
      console.log('show');
    });
    const keyboardListenerHide = Keyboard.addListener('keyboardDidHide', () => {
      console.log('hide');
      Keyboard.dismiss();
      console.log('hideAftrer');
    });
    return () => {
      keyboardListenerShow.remove();
      keyboardListenerHide.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
            gap: 10,
          }}
        >
          <TextInput
            style={{ backgroundColor: 'grey', height: 40 }}
            onFocus={()=>{console.log('onFocus');}}
            onBlur={()=>{console.log('onBlur');}}
          />
          <Button
            title="Press"
            style={{ backgroundColor: 'aqua', height: 50 }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

// const App = () => {
//   const [activeScreen, setActiveScreen] = useState(1);
//   const [isKeyboardShow, setIsKeyboardShow] = useState(false);

//   const showK = () => {
//     console.log('inShowK');
//     setIsKeyboardShow(true);
//   };

//   console.log('App ', isKeyboardShow);

//   useEffect(() => {
//     const keyboardDidShowListener = Keyboard.addListener(
//       'keyboardDidShow',
//       () => {
//         //console.log('showK ', isKeyboardShow);
//         //setIsKeyboardShow(true);
//       }
//     );

//     const keyboardDidHideListener = Keyboard.addListener(
//       'keyboardDidHide',
//       () => {
//         //console.log('hideKB ', isKeyboardShow);
//         setIsKeyboardShow(false);
//         //console.log('hideKA ', isKeyboardShow);
//       }
//     );

//     return () => {
//       keyboardDidShowListener.remove();
//       keyboardDidHideListener.remove();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <ImageBackground
//         source={background}
//         resizeMode="cover"
//         style={styles.image}
//       >
//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : "position"}
//           keyboardVerticalOffset={0}
//             style={styles.keyBoardContainer}
//           >
//           {activeScreen === 0 ? (
//             <LoginScreen
//               activeScreen={activeScreen}
//               isKeyboardShow={isKeyboardShow}
//               setActiveScreen={setActiveScreen}
//             />
//           ) : (
//             <RegistrationScreen
//               activeScreen={activeScreen}
//               isKeyboardShow={isKeyboardShow}
//               setIsKeyboardShow={setIsKeyboardShow}
//               setActiveScreen={setActiveScreen}
//             />
//           )}
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyBoardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  inp: {
    height: 50,
    backgroundColor: 'grey',
  },
});

export default App;
