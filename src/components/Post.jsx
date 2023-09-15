import { Image, Text, View, StyleSheet } from 'react-native';
import PostProperty from './PostProperty';
import PostDescription from './PostDescription';
const backgroundImage = require('../assets/background.jpg');
import color from '../constants/colors';
const { secondaryTextColor, backgroundColor } = color;

const Post = ({ postInfo: { img, label, commentsCount, likesCount, location } }) => {
  return (
    <View style={styles.postContainer}>
      <Image source={{uri: img}} resizeMode="cover" style={styles.postImage} />
      <Text style={styles.postCaption}>{label}</Text>
      <PostDescription commentsCount={commentsCount} likesCount={likesCount} location={location} />
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
    fontFamily: 'Roboto',
  },
});

export default Post;
