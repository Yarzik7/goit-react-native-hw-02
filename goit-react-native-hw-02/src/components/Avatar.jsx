import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Image,
  Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import addButton from '../assets/add.png';
import deleteButton from '../assets/delete.png';
import avatar from '../assets/avatar.jpg';
import { useState } from 'react';

const Avatar = ({ isKeyboardShow }) => {
  return (
    <View style={styles.pfotoContainer}>
      <Image
        source={Keyboard.isVisible() ? avatar : null}
        resizeMode="cover"
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.addButton} activeOpacity={0.5}>
        <Image
          source={Keyboard.isVisible() ? deleteButton : addButton}
          style={{ width: '100%', height: '100%' }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pfotoContainer: {
    marginTop: -60,
    height: 120,
    width: 120,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'relative',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
  },
});

export default Avatar;
