import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

export const useLoggedInRedirect = isLoggedIn => {
  const navigation = useNavigation();

  useEffect(() => {
    if (isLoggedIn) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'BottomTabs' }],
      });
    }
  }, [isLoggedIn]);
};
