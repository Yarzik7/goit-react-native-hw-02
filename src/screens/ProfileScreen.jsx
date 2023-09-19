import { StyleSheet } from 'react-native';
import LogoutButton from '../components/LogoutButton';
import ImageBackgroundLayout from '../components/ImageBackgroundLayout';
import PostsList from '../components/PostsList';
import Avatar from '../components/Avatar';
import Title from '../components/Title';
import { useState } from 'react';

const ProfileScreen = ({ userName = 'Name' }) => {
  const [avatarPath, setAvatarPath] = useState(null);
  return (
    <ImageBackgroundLayout>
      <Avatar avatarPath={avatarPath} setAvatarPath={setAvatarPath} />
      <LogoutButton style={styles.logoutButton} />
      <Title title={userName} />
      <PostsList />
    </ImageBackgroundLayout>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    position: 'absolute',
    top: 22,
    right: 16,
  },
});

export default ProfileScreen;
