import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import BottomNavigator from 'navigators/BottomNavigator';
import UserInfo from '../components/UserInfo';
import PostsList from '../components/PostsList';
import Post from '../components/Post';
import posts from '../data/postsData';
import colors from '../constants/colors';

const { white } = colors;

const Tabs = createBottomTabNavigator();

const PostsScreen = () => {
  const navigation = useNavigation();
  const {
    params: { login, email, avatarPath },
  } = useRoute();

  return (
    <View style={styles.postsContainer}>
      <UserInfo login={login} email={email} avatarPath={avatarPath} />
      <PostsList/>
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 0,
    gap: 32,
    backgroundColor: white,
    flex: 1
  },
  postList: {
    gap: 34,
    paddingBottom: 91,
  },
});

export default PostsScreen;
