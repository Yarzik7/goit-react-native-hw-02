import { StyleSheet, Animated } from 'react-native';
import useAnimatedSpinner from '../../hooks/useAnimatedSpinner';
import color from '../../constants/colors';

const { accentColor, white } = color;

const SendCommentLoader = () => {
  const rotateInterpolate = useAnimatedSpinner();

  return (
    <Animated.View style={[styles.spinner, { transform: [{ rotate: rotateInterpolate }] }]}></Animated.View>
  );
};

const styles = StyleSheet.create({
  spinner: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: white,
    borderTopColor: accentColor,
  },
});

export default SendCommentLoader;
