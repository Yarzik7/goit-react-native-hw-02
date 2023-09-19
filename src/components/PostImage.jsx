import { StyleSheet, View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome } from '@expo/vector-icons';

import color from '../constants/colors';
const { white, backgroundColor, cameraBackgroundColor, primaryTextColor } = color;

const PostImage = ({ imagePath = null, setImagePath }) => {
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
      <ImageBackground
        source={{ uri: imagePath }}
        resizeMode="cover"
        imageStyle={styles.postImage}
        style={styles.postImageView}
      >
        <TouchableOpacity
          style={[styles.actionImageButton, imagePath && styles.editImageButton]}
          onPress={onImageAction}
        >
          <FontAwesome name="camera" size={24} color={imagePath ? white : primaryTextColor} />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.imageActionText}>{imagePath ? 'Редагувати фото' : 'Завантажте фото'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postImageContainer: {
    width: '100%',
  },
  postImage: {
    borderRadius: 8,
  },
  postImageView: {
    width: '100%',
    backgroundColor,
    height: 240,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionImageButton: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: white,
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
