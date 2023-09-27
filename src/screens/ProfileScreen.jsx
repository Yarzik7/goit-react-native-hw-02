import { StyleSheet } from 'react-native';
import LogoutButton from '../components/LogoutButton';
import ImageBackgroundLayout from '../components/ImageBackgroundLayout';
import PostsList from '../components/PostsList';
import Avatar from '../components/Avatar';
import Title from '../components/Title';
import { useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { getPosts } from '../redux/posts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectUser } from '../redux/auth/selectors';

const ProfileScreen = ({ userName = 'Name' }) => {
  const [avatarPath, setAvatarPath] = useState(null);
  // const isFocused = useIsFocused();
  // const dispatch = useDispatch();
  // const { uid } = useSelector(selectUser);
  // console.log(uid);
  // useEffect(() => {
  //   if (isFocused) {
  //     dispatch(getPosts(uid));
  //   }
  // }, [isFocused]);

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
