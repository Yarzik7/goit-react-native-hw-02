import { StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import colors from '../constants/colors';
const { emailColor } = colors;

const ArrowButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} style={styles.arrowIcon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrowIcon: {
    left: 16,
    color: emailColor,
  },
});

export default ArrowButton;
