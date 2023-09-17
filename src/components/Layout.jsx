import { StyleSheet, View, ImageBackground } from 'react-native';
import KeyboardLayout from './KeyboardLayout';
import colors from '../constants/colors';
import { useRoute } from '@react-navigation/native';

const backgroundImage = require('../assets/background.jpg');

const authScreens = ['Login', 'Registration'];

const Layout = ({ contentContainerStyles = [], children }) => {
  const { name: screenName } = useRoute();
  return (
    <KeyboardLayout
      shouldRenderComponent={authScreens.includes(screenName)}
      keyboardVerticalOffset={screenName === 'Login' ? -208 : -142}
    >
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundView}>
        <View style={[styles.authContainer, ...contentContainerStyles]}>{children}</View>
      </ImageBackground>
    </KeyboardLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authContainer: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    maxHeight: '80%',
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
