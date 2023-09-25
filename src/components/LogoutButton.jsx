import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { logOut } from '../firebase/auth';

import colors from '../constants/colors';

const { primaryTextColor } = colors;

const LogoutButton = ({ style = {} }) => {
  const navigator = useNavigation();
  const onNavigateByLogout = async () => {
    await logOut();
    navigator.navigate('LoginScreen')
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
