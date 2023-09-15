import { AntDesign, Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

const LogoutButton = ({ style = {} }) => {
  return (
    <TouchableOpacity style={style}>
      <Feather name="log-out" size={24} style={styles.iconLogout} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconLogout: {
    right: 10,
    color: '#BDBDBD',
  },
});

export default LogoutButton;
