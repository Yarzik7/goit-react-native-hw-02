import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../redux/auth/operations';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';

import colors from '../constants/colors';
import { useEffect } from 'react';

const { primaryTextColor } = colors;

const LogoutButton = ({ style = {} }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
      <Feather name="log-out" size={24} style={styles.logoutIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  logoutIcon: {
    right: 16,
    color: primaryTextColor,
  },
});

export default LogoutButton;
