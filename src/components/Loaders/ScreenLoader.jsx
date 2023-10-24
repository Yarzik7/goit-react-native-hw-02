import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import useAnimatedSpinner from '../../hooks/useAnimatedSpinner';
import color from '../../constants/colors';

const { accentColor, white } = color;

const { width, height } = Dimensions.get('screen');
const SPINNER_SIZE_DEFAULT = Math.round((width < height ? width : height) * 0.3);

const ScreenLoader = ({ spinnerSize }) => {
  const rotateInterpolate = useAnimatedSpinner();

  return (
    <View style={styles.overlay}>
      <Animated.View
        style={[
          styles.spinner,
          { transform: [{ rotate: rotateInterpolate }] },
          spinnerSize && { width: spinnerSize, height: spinnerSize, borderRadius: spinnerSize / 2 },
        ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinner: {
    width: SPINNER_SIZE_DEFAULT,
    height: SPINNER_SIZE_DEFAULT,
    borderRadius: SPINNER_SIZE_DEFAULT / 2,
    borderWidth: 5,
    borderColor: white,
    borderTopColor: accentColor,
  },
});

export default ScreenLoader;
