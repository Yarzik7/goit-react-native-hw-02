import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Spinner from './Loaders/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserId } from '../redux/auth/selectors';
import { selectIsDeletingPost, selectCurrentPostId } from '../redux/posts/selectors';
import { deletePost } from '../redux/posts/operations';
import PostDescription from './PostDescription';

import color from '../constants/colors';
const { secondaryTextColor, backgroundColor, primaryTextColor, white, accentColor } = color;

const Post = ({
  postInfo: {
    id,
    postImage = null,
    postName = 'Post name',
    commentsCount,
    likesCount,
    postImageLocation,
    currentCoords,
    author,
  },
}) => {
  const dispatch = useDispatch();
  const userId = useSelector(selectUserId);
  const isDeletingPost = useSelector(selectIsDeletingPost);
  const currentPostId = useSelector(selectCurrentPostId);
  isCurrentUser = author === userId;

  const onDeletePost = async () => {
    await dispatch(deletePost({ postId: id, img: postImage }));
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.postImageContainer}>
        <Image source={{ uri: postImage }} resizeMode="cover" style={styles.postImage} />
        {isCurrentUser && (
          <TouchableOpacity disabled={isDeletingPost} style={styles.postDeleteButton} onPress={onDeletePost}>
            {isDeletingPost && currentPostId === id ? (
              <Spinner />
            ) : (
              <Feather name="trash-2" size={24} color={white} />
            )}
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.postCaption}>{postName}</Text>

      <PostDescription
        postId={id}
        img={postImage}
        commentsCount={commentsCount}
        likesCount={likesCount}
        location={postImageLocation}
        label={postName}
        coords={currentCoords}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    maxHeight: 299,
    gap: 8,
  },
  postImageContainer: {
    position: 'relative',
    width: '100%',
    height: 240,
    backgroundColor,
    borderRadius: 8,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  postDeleteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
  },
  postCaption: {
    color: secondaryTextColor,
    fontWeight: 500,
    fontFamily: 'Roboto-Medium',
  },
});

export default Post;
