import {
  StyleSheet,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import KeyboardLayout from './KeyboardLayout';
import colors from '../constants/colors';
import { useRoute } from '@react-navigation/native';

const backgroundImage = require('../assets/background.jpg');

const authScreens = ['Login', 'Registration'];

const Layout = ({ contentContainerStyles = [], children }) => {
  const { name: screenName } = useRoute();
  return (
    // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //   <KeyboardAvoidingView
    //     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //     keyboardVerticalOffset={screenName === 'Login' ? -208 : -142}
    //     style={styles.container}
    //   >
    <KeyboardLayout
      shouldRenderComponent={authScreens.includes(screenName)}
      keyboardVerticalOffset={screenName === 'Login' ? -208 : -142}
    >
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundView}>
        <View style={[styles.authContainer, ...contentContainerStyles]}>
          {/* <Text style={{backgroundColor: 'green'}}>Text</Text> */}
          {children}
        </View>
      </ImageBackground>
    </KeyboardLayout>

    //   </KeyboardAvoidingView>
    // </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authContainer: {
    width: '100%',
    paddingHorizontal: 16,
    // paddingBottom: 163,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    maxHeight: '80%',
    // justifyContent: 'flex-end',
    // paddingBottom: 0,
  },
  backgroundView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  paddingLogin: {
    paddingBottom: 111,
  },
  paddingRegistration: {
    paddingBottom: 45,
  },
});

export default Layout;
