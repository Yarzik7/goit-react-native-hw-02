import { View, StyleSheet, TouchableOpacity } from 'react-native';
import PostImage from '../components/PostImage';
import PostInfoInput from '../components/PostInfoInput';
import Button from '../components/Button';
import KeyboardLayout from '../components/KeyboardLayout';
import * as Location from 'expo-location';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../redux/auth/selectors';
import { createPost } from '../redux/posts/operations';

import color from '../constants/colors';
const { white, primaryTextColor, buttonDisabledColor } = color;

const CreatePostsScreen = () => {
  const [postImage, setPostImage] = useState(null);
  const [postName, setPostName] = useState('');
  const [postImageLocation, setPostImageLocation] = useState('');
  const [coords, setCoords] = useState(null);

  const dispatch = useDispatch();
  const { uid: author } = useSelector(selectUser);
  const navigation = useNavigation();

  const reset = () => {
    setPostImage(null);
    setPostName('');
    setPostImageLocation('');
    setCoords(null);
  };

  const isDisabledButton = () => !(postImage && postName && postImageLocation);

  const onCreatePost = async () => {
    let currentCoords = {
      latitude: 0,
      longitude: 0,
    };

    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      currentCoords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
    } catch (error) {
      console.log('Не вдалося отримати координати вашого місцезнаходження');
    } finally {
      setCoords(currentCoords);

      const postData = {
        postImage,
        postName,
        postImageLocation,
        currentCoords,
        author,
        likesCount: 0,
        commentsCount: 0,
      };
      console.log(postData);
      dispatch(createPost(postData));
      reset();

      navigation.navigate('PostsScreen');
    }
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
