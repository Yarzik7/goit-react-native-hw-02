import { FlatList, StyleSheet } from 'react-native';
import Post from './Post';
import posts from '../data/postsData';

const PostsList = () => {
  return (
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post postInfo={item} />}
        keyExtractor={item => item.id}
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
    gap: 34,
    paddingBottom: 34,
  },
});

export default PostsList;
