import { FlatList, StyleSheet } from 'react-native';
import Post from './Post';
import posts from '../data/postsData';
import { useSelector } from 'react-redux';
import { selectPosts } from '../redux/posts/selectors';

const PostsList = () => {
  const postsIt = useSelector(selectPosts);
  console.log(postsIt);
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <Post postInfo={item} />}
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
    gap: 34,
    paddingBottom: 34,
  },
});

export default PostsList;
