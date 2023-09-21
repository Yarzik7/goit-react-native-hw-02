const { View, Text, Image, StyleSheet } = require('react-native');

import colors from '../constants/colors';
const { commentContainerBackground, secondaryTextColor, primaryTextColor, backgroundColor } = colors;

const Comment = ({ userAvatar = null, text = 'text', date = 'date' }) => {
  return (
    <View style={styles.commentContainer}>
      <Image source={{ uri: userAvatar }} resizeMode="cover" style={styles.userAvatar} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.dateText}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
    backgroundColor: 'transparent',
  },
  userAvatar: {
    width: 28,
    height: 28,
    backgroundColor,
    borderRadius: 50,
  },
  textContainer: {
    padding: 16,
    gap: 8,
    borderRadius: 6,
    backgroundColor: commentContainerBackground,
  },
  text: {
    fontFamily: 'Roboto-Regular',
    fontSize: 13,
    color: secondaryTextColor,
  },
  dateText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: primaryTextColor,
    alignSelf: 'flex-end',
  },
});

export default Comment;
