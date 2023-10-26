import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';
import ScreenLoader from './Loaders/ScreenLoader';

import color from '../constants/colors';
const { white, backgroundColor, cameraBackgroundColor, primaryTextColor } = color;

const PostImage = ({ imagePath = null, setImagePath }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isGettingPhoto, setIsGettingPhoto] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);
  const [type] = useState(Camera.Constants.Type.back);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const onGetPhoto = async () => {
    if (imagePath) {
      setImagePath(null);
      return;
    }

    if (cameraRef) {
      setTimeout(() => setIsGettingPhoto(true), 1000);
      const { uri } = await cameraRef.takePictureAsync();
      setIsGettingPhoto(false);
      setImagePath(uri);
    }
  };

  const onImageAction = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
      if (!result.canceled) {
        setImagePath(result.assets[0].uri);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <View style={styles.postImageContainer}>
      <View style={styles.postImageView}>
        <ImageBackground
          source={{ uri: imagePath }}
          resizeMode="cover"
          imageStyle={styles.postImage}
          style={styles.photoContainer}
        >
          {hasPermission && isFocused && !imagePath ? (
            <Camera type={type} ref={setCameraRef} style={styles.camera} />
          ) : null}
        </ImageBackground>

        {!isGettingPhoto && (
          <TouchableOpacity
            style={[styles.actionImageButton, imagePath && styles.editImageButton]}
            onPress={onGetPhoto}
          >
            <FontAwesome name="camera" size={24} color={imagePath ? white : primaryTextColor} />
          </TouchableOpacity>
        )}
        {isGettingPhoto && <ScreenLoader spinnerSize={60} />}
      </View>
      <TouchableOpacity onPress={onImageAction}>
        <Text style={styles.imageActionText}>{imagePath ? 'Редагувати фото' : 'Завантажте фото'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postImageContainer: {
    width: '100%',
  },
  camera: {
    flex: 1,
  },
  postImage: {
    borderRadius: 8,
  },
  photoContainer: {
    flex: 1,
    backgroundColor,
  },
  postImageView: {
    width: '100%',
    height: 240,
    marginBottom: 8,
    backgroundColor,
    borderRadius: 8,
    overflow: 'hidden',
  },
  actionImageButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: cameraBackgroundColor,
  },
  editImageButton: {
    backgroundColor: cameraBackgroundColor,
  },
  imageActionText: {
    color: primaryTextColor,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: 400,
  },
});

export default PostImage;
