import { Feather } from '@expo/vector-icons';
import Spinner from './Loaders/Spinner';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectIsLogout } from '../redux/auth/selectors';

import colors from '../constants/colors';
import { useEffect } from 'react';

const { primaryTextColor } = colors;

const LogoutButton = ({ style = {} }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isLogout = useSelector(selectIsLogout);
  const navigation = useNavigation();

  useEffect(() => {
    if (!isLoggedIn) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    }
  }, [isLoggedIn]);

  const onNavigateByLogout = async () => {
    dispatch(logOutUser());
  };

  return (
    <TouchableOpacity style={style} onPress={onNavigateByLogout}>
      {isLogout ? (
        <View style={styles.spinnerContainer}>
          <Spinner />
        </View>
      ) : (
        <Feather name="log-out" size={24} style={styles.logoutIcon} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutIcon: {
    right: 16,
    color: primaryTextColor,
  },
  spinnerContainer: {
    right: 16,
  },
});

export default LogoutButton;
