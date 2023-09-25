import { View, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import UserInfo from '../components/UserInfo';
import PostsList from '../components/PostsList';
import { auth } from '../../config';

import colors from '../constants/colors';
const { white } = colors;

const PostsScreen = () => {
  // const displayName = 'login',
  //   email = 'email',
  //   photoURL = null;
  // console.log(auth.currentUser);

  // const {
  //   params: { login, email, avatarPath } = {},
  // } = useRoute();

  const { displayName, email, photoURL = null } = auth.currentUser;

  return (
    <View style={styles.postsContainer}>
      <UserInfo login={displayName} email={email} avatarPath={photoURL} />
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
