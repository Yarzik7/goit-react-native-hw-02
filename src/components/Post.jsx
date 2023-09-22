import { Image, Text, View, StyleSheet } from 'react-native';
import PostDescription from './PostDescription';

import color from '../constants/colors';
const { secondaryTextColor, backgroundColor } = color;

const Post = ({
  postInfo: { img = null, label = 'Post name', commentsCount, likesCount, location, coords },
}) => {
  return (
    <View style={styles.postContainer}>
      <Image source={{ uri: img }} resizeMode="cover" style={styles.postImage} />
      <Text style={styles.postCaption}>{label}</Text>
      <PostDescription
        img={img}
        commentsCount={commentsCount}
        likesCount={likesCount}
        location={location}
        label={label}
        coords={coords}
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
