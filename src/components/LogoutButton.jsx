import { Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../constants/colors';
const { primaryTextColor } = colors;

const LogoutButton = ({ style = {} }) => {
  return (
    <TouchableOpacity style={style}>
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
