import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PostImage from '../components/PostImage';
import PostInfoInput from '../components/PostInfoInput';
import Button from '../components/Button';
import KeyboardLayout from '../components/KeyboardLayout';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import color from '../constants/colors';
const { white, primaryTextColor, buttonDisabledColor } = color;

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

  const isDisabledButton = () => !(postImage && postName && postImageLocation);

  const onCreatePost = () => {
    const postData = { postImage, postName, postImageLocation };
    console.log(postData);
    navigation.goBack();
    reset();
  };

  return (
    <KeyboardLayout>
      <View style={styles.postsContainer}>
        <PostImage imagePath={postImage} setImagePath={setPostImage} />

        <View style={styles.fieldsContainer}>
          <PostInfoInput placeholder={'Назва...'} value={postName} onChange={setPostName} />
          <PostInfoInput
            value={postImageLocation}
            placeholder={'Місцевість...'}
            onChange={setPostImageLocation}
          >
            <Feather name="map-pin" size={24} color={primaryTextColor} style={styles.inputIcon} />
          </PostInfoInput>
        </View>

        <Button text="Опублікувати" disabled={isDisabledButton()} onSubmit={onCreatePost} />

        <TouchableOpacity style={styles.trashButton} onPress={reset}>
          <Feather name="trash-2" size={24} color={primaryTextColor} />
        </TouchableOpacity>
      </View>
    </KeyboardLayout>
  );
};

const styles = StyleSheet.create({
  postsContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 22,
    gap: 32,
    backgroundColor: white,
  },
  fieldsContainer: {
    gap: 16,
  },
  inputIcon: {
    position: 'absolute',
    top: 13,
  },
  trashButton: {
    width: 70,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 'auto',
    borderRadius: 20,
    backgroundColor: buttonDisabledColor,
  },
});

export default CreatePostsScreen;
