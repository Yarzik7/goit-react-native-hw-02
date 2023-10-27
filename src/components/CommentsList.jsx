import { FlatList, StyleSheet } from 'react-native';
import Comment from './Comment';
import Message from './Message';
import { selectSortedByCreatedTimeComments } from '../redux/comments/selectors';
import { useSelector } from 'react-redux';

const CommentsList = ({ noCommentsMassage }) => {
  const comments = useSelector(selectSortedByCreatedTimeComments);

  return (
    <>
      {comments.length ? (
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
      ) : (
        <Message message={noCommentsMassage} />
      )}
    </>
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
