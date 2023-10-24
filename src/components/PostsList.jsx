import { FlatList, StyleSheet } from 'react-native';
import Post from './Post';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, selectIsDeletingPost } from '../redux/posts/selectors';
import { selectUser } from '../redux/auth/selectors';
import { useEffect } from 'react';
import { getPosts } from '../redux/posts/operations';
import { useRoute, useIsFocused } from '@react-navigation/native';

const PostsList = () => {
  const posts = useSelector(selectPosts);
  const isDeletingPost = useSelector(selectIsDeletingPost);
  const { uid } = useSelector(selectUser);
  const dispatch = useDispatch();
  const { name } = useRoute();

  const isFocused = useIsFocused();

  useEffect(() => {
    (name === 'PostsScreen' || !isDeletingPost) && dispatch(getPosts());
  }, [isFocused, name, isDeletingPost]);

  const postsForRender = () => (name === 'ProfileScreen' ? posts.filter(post => post.author === uid) : posts);

  return (
    <FlatList
      data={postsForRender()}
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
