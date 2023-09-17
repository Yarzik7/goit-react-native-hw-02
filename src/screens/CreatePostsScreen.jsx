import { View, Image, Text, StyleSheet } from 'react-native';
import color from '../constants/colors';
import PostImage from '../components/PostImage';
import PostInfoInput from '../components/PostInfoInput';
import { Feather } from '@expo/vector-icons';
const { secondaryTextColor, backgroundColor, white, primaryTextColor } = color;

const CreatePostsScreen = () => {
  return (
    <View style={styles.postsContainer}>
      <PostImage />
      <View style={{ width: '100%', gap: 16 }}>
        <PostInfoInput placeholder={'Назва...'} />
        <PostInfoInput
          placeholder={'Місцевість...'}
          Icon={<Feather name="map-pin" size={24} color={primaryTextColor} style={styles.inputIcon} />}
        />
      </View>
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
    flex: 1,
  },
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
  inputIcon: {
    position: 'absolute',
    top: 13,
  },
});

export default CreatePostsScreen;
