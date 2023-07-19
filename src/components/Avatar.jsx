import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import addButton from '../assets/add.png';
import deleteButton from '../assets/delete.png';
import avatar from '../assets/avatar.jpg';

const Avatar = ({ isKeyboardShow }) => {
  return (
    <View style={styles.avatarContainer}>
      <Image source={isKeyboardShow ? avatar : 0} resizeMode="cover" style={styles.avatar} />
      <TouchableOpacity style={styles.actionImageButton}>
        <Image source={isKeyboardShow ? deleteButton : addButton} style={styles.actionImage} />
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
    backgroundColor: '#F6F6F6',
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
  },
  actionImage: {
    width: '100%',
    height: '100%',
  },
});

export default Avatar;
