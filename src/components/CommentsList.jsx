import { FlatList, StyleSheet } from 'react-native';
import Comment from './Comment';
import { selectSortedByCreatedTimeComments } from '../redux/comments/selectors';
import { useSelector } from 'react-redux';

const CommentsList = () => {
  const comments = useSelector(selectSortedByCreatedTimeComments);

  return (
    <FlatList
      data={comments}
      renderItem={({ item: { commentText, commentUserAvatar, date, author } }) => (
        <Comment text={commentText} commentUserAvatar={commentUserAvatar} date={date} author={author} />
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
