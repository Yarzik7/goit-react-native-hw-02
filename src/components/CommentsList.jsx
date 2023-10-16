import { FlatList, StyleSheet } from 'react-native';
import Comment from './Comment';
import { selectComments } from '../redux/comments/selectors';
// import comments from '../data/commentsData';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getPostCommentsOperation } from '../redux/comments/operations';

const CommentsList = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectComments);

  // useEffect(() => {
  //   dispatch(getPostCommentsOperation(postId));
  // }, [postId]);

  return (
    <FlatList
      data={comments}
      renderItem={({ item: { commentText, photoURL, date, author } }) => (
        <Comment text={commentText} photoURL={photoURL} date={date} author={author} />
      )}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.commentsList}
      style={styles.commentsListContainer}
    />
  );
};

const styles = StyleSheet.create({
  commentsListContainer: {
    width: '100%',
  },
  commentsList: {
    gap: 24,
  },
});

export default CommentsList;
