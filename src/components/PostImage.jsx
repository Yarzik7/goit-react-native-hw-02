import { StyleSheet, View, TouchableOpacity, Image, ImageBackground, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import color from '../constants/colors';
const {
  accentColor,
  white,
  backgroundColor,
  borderColor,
  shadowColor,
  cameraBackgroundColor,
  primaryTextColor,
} = color;

const PostImage = ({ avatarPath = null, setAvatarPath = () => {} }) => {
  const onAvatarAction = async () => {
    if (avatarPath) {
      setAvatarPath(null);
      return;
    }
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setAvatarPath(result.assets[0].uri);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <View style={styles.postImageContainer}>
      <ImageBackground source={{ uri: avatarPath }} resizeMode="cover" style={styles.postImage}>
        <TouchableOpacity
          style={[styles.actionImageButton, avatarPath && styles.editImageButton]}
          onPress={onAvatarAction}
        >
          <FontAwesome name="camera" size={24} color={avatarPath ? white : primaryTextColor} />
        </TouchableOpacity>
      </ImageBackground>
      <Text style={styles.imageActionText}>{avatarPath ? 'Редагувати фото' : 'Завантажте фото'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postImageContainer: {
    width: '100%',
  },
  postImage: {
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
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: 400,
  },
});

export default PostImage;
