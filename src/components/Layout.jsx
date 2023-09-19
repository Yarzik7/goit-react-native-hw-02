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
        <View style={[styles.contentContainer, ...contentContainerStyles]}>{children}</View>
      </ImageBackground>
    </KeyboardLayout>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
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
});

export default Layout;
