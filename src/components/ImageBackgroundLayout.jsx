import { StyleSheet, ImageBackground, View } from 'react-native';
import colors from '../constants/colors';

const backgroundImage = require('../assets/background.jpg');

const ImageBackgroundLayout = ({ contentContainerStyles = [], children }) => {
  return (
    <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.backgroundView}>
      <View style={[styles.contentContainer, ...contentContainerStyles]}>{children}</View>
    </ImageBackground>
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

export default ImageBackgroundLayout;
