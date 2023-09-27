import { Image, Text, View, StyleSheet } from 'react-native';
import PostDescription from './PostDescription';

import color from '../constants/colors';
const { secondaryTextColor, backgroundColor } = color;

const Post = ({
  postInfo: {
    id,
    postImage = null,
    postName = 'Post name',
    commentsCount,
    likesCount,
    postImageLocation,
    currentCoords,
  },
}) => {
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: postImage }} resizeMode="cover" style={styles.postImage} />
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
  postImage: {
    width: '100%',
    backgroundColor,
    height: 240,
    borderRadius: 8,
  },
  postCaption: {
    color: secondaryTextColor,
    fontWeight: 500,
    fontFamily: 'Roboto-Medium',
  },
});

export default Post;
