import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';

const ArrowButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigation.goBack}>
      <AntDesign name="arrowleft" size={24} style={styles.iconArrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconArrow: {
    color: '#21212180',
    left: 16,
  },
});

export default ArrowButton;
