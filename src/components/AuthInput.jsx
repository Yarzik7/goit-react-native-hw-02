import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

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
        cursorColor="#FF6C00"
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
    backgroundColor: '#F6F6F6',
    height: 50,
    paddingHorizontal: 16,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  authInputFocused: {
    backgroundColor: '#ffffff',
    borderColor: '#FF6C00',
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
    color: '#1B4371',
  },
});

export default AuthInput;
