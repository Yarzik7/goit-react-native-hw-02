import { View, Image, TextInput, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import CommentsList from '../components/CommentsList';
import { useState, useEffect } from 'react';
import { createComment, getPostCommentsOperation } from '../redux/comments/operations';
import { selectUser } from '../redux/auth/selectors';
import { selectCommentsOperations } from '../redux/comments/selectors';
import { commentsClear } from '../redux/comments/commentsSlice';
import SendCommentLoader from '../components/Loaders/SendCommentLoader';
import ScreenLoader from '../components/Loaders/ScreenLoader';
import moment from 'moment/moment';
import 'moment/locale/uk';

import colors from '../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
const { white, backgroundColor, secondaryTextColor, borderColor, accentColor } = colors;

const CommentsScreen = () => {
  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();
  const { uid: author, photoURL } = useSelector(selectUser);
  const { isCommentsLoading, isCreatingComment } = useSelector(selectCommentsOperations);

  const {
    params: { img, postId },
  } = useRoute();

  useEffect(() => {
    dispatch(getPostCommentsOperation(postId));

    return () => dispatch(commentsClear());
  }, [postId]);

  const onSendComment = async () => {
    const commentData = {
      author,
      commentText,
      postId,
      date: moment().locale('uk').format('DD MMMM, YYYY | HH:mm'),
      photoURL,
    };

    const res = await dispatch(createComment(commentData));
    if (res.meta.requestStatus === 'fulfilled') {
      setCommentText('');
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <View style={styles.commentsScreenContainer}>
        <Image source={{ uri: img }} resizeMode="cover" style={styles.postImage} />

        <CommentsList postId={postId} />

        <View>
          <TextInput
            value={commentText}
            placeholder="Коментувати..."
            cursorColor={accentColor}
            style={styles.commentInput}
            onChangeText={setCommentText}
          />
          <TouchableOpacity disabled={!commentText} style={styles.sendButton} onPress={onSendComment}>
            {isCreatingComment ? <SendCommentLoader /> : <AntDesign name="arrowup" size={24} color={white} />}
          </TouchableOpacity>
        </View>
      </View>
      {isCommentsLoading && <ScreenLoader />}
    </>
  );
};

const styles = StyleSheet.create({
  commentsScreenContainer: {
    flex: 1,
    gap: 32,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 16,
    backgroundColor: white,
  },
  postImage: {
    width: '100%',
    height: 240,
    borderRadius: 8,
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
