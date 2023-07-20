import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import color from '../constants/colors';
const { linkColor, accentColor, white, backgroundColor, borderColor, secondaryTextColor } = color;

const AuthInput = ({ type, placeholder, value, onChange }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const isPasswordType = type === 'password';

  const onFocus = () => setIsInputFocused(true);

  const onBlur = () => setIsInputFocused(false);

  const onShowPassword = () => setIsShowPassword(!isShowPassword);

  return (
    <View style={styles.authInputContainer}>
      <TextInput
        value={value}
        placeholder={placeholder}
        inputMode={isPasswordType ? 'text' : type}
        style={[styles.authInput, isInputFocused && styles.authInputFocused]}
        cursorColor={accentColor}
        secureTextEntry={isPasswordType ? !isShowPassword : false}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {isPasswordType && (
        <TouchableOpacity style={styles.showPasswordButton} onPress={onShowPassword}>
          <Text style={styles.showPasswordButtonText}>{isShowPassword ? 'Приховати' : 'Показати'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  authInputContainer: {
    position: 'relative',
  },
  authInput: {
    backgroundColor,
    height: 50,
    paddingHorizontal: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: secondaryTextColor,
    borderWidth: 1,
    borderColor,
    borderRadius: 8,
  },
  authInputFocused: {
    backgroundColor: white,
    borderColor: accentColor,
  },
  showPasswordButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  showPasswordButtonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: linkColor,
  },
});

export default AuthInput;
