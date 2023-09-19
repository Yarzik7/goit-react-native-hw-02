import { Text, StyleSheet } from 'react-native';

import color from '../constants/colors';
const { secondaryTextColor } = color;

const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 32,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: secondaryTextColor,
  },
});

export default Title;
