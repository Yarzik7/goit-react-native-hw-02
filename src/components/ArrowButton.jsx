import { AntDesign, Feather } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';

const ArrowButton = () => {
  return (
    <TouchableOpacity>
      <AntDesign name="arrowleft" size={24} style={styles.iconArrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconLogout: {
    right: 10,
    color: '#BDBDBD',
  },
  iconArrow: {
    color: '#21212180',
    left: 16,
  },
});

export default ArrowButton;
