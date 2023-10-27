import { FlatList, StyleSheet, ToastAndroid } from 'react-native';
import Post from './Post';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsDeletingPost, selectSortedByCreatedTimePosts } from '../redux/posts/selectors';
import { selectUser } from '../redux/auth/selectors';
import { useEffect } from 'react';
import { getPosts } from '../redux/posts/operations';
import { useRoute, useIsFocused } from '@react-navigation/native';

const PostsList = ({ noPostsMassage }) => {
  const posts = useSelector(selectSortedByCreatedTimePosts);
  const isDeletingPost = useSelector(selectIsDeletingPost);
  const { uid } = useSelector(selectUser);
  const dispatch = useDispatch();
  const { name } = useRoute();

  const isFocused = useIsFocused();

  useEffect(() => {
    const fetchPosts = async () => {
      if (name === 'PostsScreen' || !isDeletingPost) {
        const getPostsResult = await dispatch(getPosts(uid));
        if (getPostsResult.error) {
          ToastAndroid.show(
            `Не вдалося отримати ${posts.length ? 'нові ' : ''}пости: ${getPostsResult.payload.message}`,
            ToastAndroid.SHORT
          );
        }
      }
    };
    fetchPosts();
  }, [isFocused, name, isDeletingPost, dispatch]);

  const postsForRender = () => (name === 'ProfileScreen' ? posts.filter(post => post.author === uid) : posts);

  return (
    <>
      {posts.length ? (
        <FlatList
          data={postsForRender()}
          renderItem={({ item }) => <Post postInfo={item} />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.postList}
          style={styles.postListContainer}
        />
      ) : (
        <Message message={noPostsMassage} />
      )}
    </>
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
