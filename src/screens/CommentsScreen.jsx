import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import CommentsList from '../components/CommentsList';

import colors from '../constants/colors';
const { white, backgroundColor, secondaryTextColor, borderColor, accentColor } = colors;

const CommentsScreen = () => {
  const { params } = useRoute();

  return (
    <View style={styles.commentsScreenContainer}>
      <Image source={{ uri: params }} resizeMode="cover" style={styles.postImage} />

      <CommentsList />

      <View>
        <TextInput placeholder="Коментувати..." cursorColor={accentColor} style={styles.commentInput} />
        <TouchableOpacity style={styles.sendButton}>
          <AntDesign name="arrowup" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    maxHeight: 299,
    gap: 8,
  },
  postImage: {
    width: '100%',
    height: 240,
    borderRadius: 8,
  },
  postCaption: {
    color: secondaryTextColor,
    fontWeight: 500,
    fontFamily: 'Roboto-Medium',
  },
  commentsScreenContainer: {
    flex: 1,
    gap: 32,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: white,
  },
  commentInput: {
    backgroundColor,
    height: 50,
    paddingHorizontal: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: secondaryTextColor,
    borderWidth: 1,
    borderColor,
    borderRadius: 50,
  },
  sendButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 34,
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: accentColor,
    borderRadius: 50,
  },
});

export default CommentsScreen;
