import { View, Text, StyleSheet } from 'react-native';

import color from '../constants/colors';
const { primaryTextColor } = color;

const Message = ({ message }) => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.messageText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    width: '100%',
    paddingVertical: 30,
  },
  messageText: {
    color: primaryTextColor,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 500,
  },
});

export default Message;
