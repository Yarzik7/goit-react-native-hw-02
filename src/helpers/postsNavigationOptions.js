import { StyleSheet } from 'react-native';
import ArrowButton from '../components/ArrowButton';

import colors from '../constants/colors';
const { white, borderColor } = colors;

const postsNavigationOptions = () => ({
  headerTitleAlign: 'center',
  headerLeft: () => <ArrowButton />,
  headerStyle: styles.header,
});

const styles = StyleSheet.create({
  header: {
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 88,
  },
});

export default postsNavigationOptions;
