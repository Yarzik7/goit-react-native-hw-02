import { FlatList, StyleSheet } from 'react-native';
import Comment from './Comment';

import comments from '../data/commentsData';

const CommentsList = () => {
  return (
    <FlatList
      data={comments}
      renderItem={({ item }) => <Comment text={item.text} userAvatar={item.userAvatar} date={item.date} />}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.postList}
      style={styles.postListContainer}
    />
  );
};

const styles = StyleSheet.create({
  postListContainer: {
    width: '100%',
  },
  postList: {
    gap: 24,
    paddingBottom: 31,
  },
});

export default CommentsList;
