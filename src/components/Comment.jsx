const { View, Text, Image, StyleSheet } = require('react-native');

import { selectUser } from '../redux/auth/selectors';
import colors from '../constants/colors';
import { useSelector } from 'react-redux';
const { commentContainerBackground, secondaryTextColor, primaryTextColor, backgroundColor } = colors;

const Comment = ({ photoURL = null, text, date, author }) => {
  const { uid } = useSelector(selectUser);
  isCurrentUser = author === uid;

  return (
    <View style={[styles.commentContainer, isCurrentUser && styles.commentCurrentUser]}>
      <Image source={{ uri: photoURL }} resizeMode="cover" style={styles.userAvatar} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={[styles.dateText, isCurrentUser && styles.currentUserDate]}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  commentCurrentUser: {
    flexDirection: 'row-reverse',
  },
  userAvatar: {
    width: 28,
    height: 28,
    backgroundColor,
    borderRadius: 50,
    flex: 1,
  },
  textContainer: {
    padding: 16,
    gap: 8,
    borderRadius: 6,
    backgroundColor: commentContainerBackground,
    width: 'auto',
    flex: 11,
  },
  text: {
    maxWidth: '100%',
    fontFamily: 'Roboto-Regular',
    fontWeight: 400,
    fontSize: 13,
    color: secondaryTextColor,
  },
  dateText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 10,
    color: primaryTextColor,
    maxWidth: '100%',
    alignSelf: 'flex-end',
  },
  currentUserDate: {
    alignSelf: 'flex-start',
  },
});

export default Comment;
