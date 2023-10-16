import { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

const useAnimatedSpinner = () => {
  const rotation = new Animated.Value(0);

  useEffect(() => {
    const spin = () => {
      rotation.setValue(0);
      Animated.loop(
        Animated.timing(rotation, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    };

    spin();
  }, []);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return rotateInterpolate;
};

export default useAnimatedSpinner;
