import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import UserInfo from '../components/UserInfo';
import PostsList from '../components/PostsList';

import colors from '../constants/colors';
const { white } = colors;

const PostsScreen = () => {
  const {
    params: { login, email, avatarPath },
  } = useRoute();

  return (
    <View style={styles.postsContainer}>
      <UserInfo login={login} email={email} avatarPath={avatarPath} />
      <PostsList />
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    gap: 32,
    backgroundColor: white,
  },
});

export default PostsScreen;
