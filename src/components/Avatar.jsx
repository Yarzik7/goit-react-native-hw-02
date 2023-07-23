import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import color from '../constants/colors';
const { accentColor, white, backgroundColor, borderColor, shadowColor } = color;

const Avatar = ({ avatarPath, setAvatarPath }) => {
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
    <View style={styles.avatarContainer}>
      <Image source={{ uri: avatarPath }} resizeMode="cover" style={styles.avatar} />
      <TouchableOpacity
        style={[styles.actionImageButton, avatarPath && styles.deleteImageButton]}
        onPress={onAvatarAction}
      >
        <AntDesign name="pluscircleo" size={25} color={avatarPath ? borderColor : accentColor} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'relative',
    marginTop: -60,
    width: 120,
    height: 120,
    backgroundColor,
    borderRadius: 16,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  actionImageButton: {
    position: 'absolute',
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: 'transparent',
  },
  deleteImageButton: {
    transform: [{ rotate: '45deg' }],
    backgroundColor: white,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 1,
    shadowColor,
    elevation: 7,
  },
});

export default Avatar;
