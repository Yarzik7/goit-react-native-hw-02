import { View, Image, Text, StyleSheet } from 'react-native';
import PostImage from '../components/PostImage';
import PostInfoInput from '../components/PostInfoInput';
import Button from '../components/Button';
import { Feather } from '@expo/vector-icons';
import color from '../constants/colors';
import { useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
const { secondaryTextColor, backgroundColor, white, primaryTextColor, buttonDisabledColor } = color;

const CreatePostsScreen = () => {
  const [postImage, setPostImage] = useState(null);
  const [postName, setPostName] = useState('');
  const [postImageLocation, setPostImageLocation] = useState('');

  const navigation = useNavigation();

  const reset = () => {
    setPostImage(null);
    setPostName('');
    setPostImageLocation('');
  };

  const onButtonDisabled = () => !(postImage && postName && postImageLocation);

  const onCreatePost = () => {
    const postData = { postImage, postName, postImageLocation };
    console.log(postData);
    navigation.goBack();
    reset();
  };

  return (
    <View style={styles.postsContainer}>
      <PostImage imagePath={postImage} setImagePath={setPostImage} />
      <View style={{ width: '100%', gap: 16 }}>
        <PostInfoInput placeholder={'Назва...'} value={postName} onChange={setPostName} />
        <PostInfoInput
          value={postImageLocation}
          placeholder={'Місцевість...'}
          Icon={<Feather name="map-pin" size={24} color={primaryTextColor} style={styles.inputIcon} />}
          onChange={setPostImageLocation}
        />
      </View>
      <Button text="Опублікувати" disabled={onButtonDisabled()} onSubmit={onCreatePost} />

      <TouchableOpacity style={styles.trashButton} onPress={reset}>
        <Feather name="trash-2" size={24} color={primaryTextColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 22,
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
  trashButton: {
    width: 70,
    height: 40,
    backgroundColor: buttonDisabledColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 'auto',
  },
});

export default CreatePostsScreen;
