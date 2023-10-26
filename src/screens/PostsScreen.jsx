import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import UserInfo from '../components/UserInfo';
import PostsList from '../components/PostsList';

import colors from '../constants/colors';
const { white } = colors;

const PostsScreen = () => {
  const { displayName, email, photoURL } = useSelector(selectUser);

  return (
    <View style={styles.postsContainer}>
      <UserInfo login={displayName} email={email} avatarPath={photoURL} />
      <PostsList noPostsMassage="Постів не знайдено" />
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
