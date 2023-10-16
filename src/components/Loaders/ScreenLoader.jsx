import { View, StyleSheet, Animated } from 'react-native';
import useAnimatedSpinner from '../../hooks/useAnimatedSpinner';
import color from '../../constants/colors';

const { accentColor, white } = color;

const ScreenLoader = () => {
  const rotateInterpolate = useAnimatedSpinner();

  return (
    <View style={styles.overlay}>
      <Animated.View style={[styles.spinner, { transform: [{ rotate: rotateInterpolate }] }]}></Animated.View>
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
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: white,
    borderTopColor: accentColor,
  },
});

export default ScreenLoader;
