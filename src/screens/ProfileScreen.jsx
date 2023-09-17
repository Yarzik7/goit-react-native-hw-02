import LogoutButton from '../components/LogoutButton';
import Layout from '../components/Layout';
import PostsList from '../components/PostsList';
import Avatar from '../components/Avatar';
import { Text, StyleSheet, FlatList } from 'react-native';
import color from '../constants/colors';
import posts from '../data/postsData';
import Post from '../components/Post';
import { View } from 'react-native';
const { secondaryTextColor } = color;

const ProfileScreen = () => {
  return (
    <Layout>
      <Avatar avatarPath={null} setAvatarPath={() => {}} />
      <LogoutButton style={styles.logoutButton} />
      <Text style={styles.title}>Name</Text>
      <PostsList />
    </Layout>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 32,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: secondaryTextColor,
  },
  authForm: {
    width: '100%',
    gap: 16,
  },
  logoutButton: {
    position: 'absolute',
    top: 22,
    right: 16,
  },
});

export default ProfileScreen;
