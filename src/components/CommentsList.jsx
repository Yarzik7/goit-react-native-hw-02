import { FlatList, StyleSheet } from 'react-native';
import Comment from './Comment';

import comments from '../data/commentsData';

const CommentsList = () => {
  return (
    <FlatList
      data={comments}
      renderItem={({ item: { text, userAvatar, date, author } }) => (
        <Comment text={text} userAvatar={userAvatar} date={date} author={author} />
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
