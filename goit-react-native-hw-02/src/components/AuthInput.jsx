import { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

const AuthInput = ({
  type,
  placeholder,
  value,
  onChange,
  setIsKeyboardShow,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  console.log(`Focus ${type} `, isInputFocused);

  return (
    <View
      style={styles.authInputContainer}
      onPress={() => {
        console.log('onPressWF');
        setIsKeyboardShow(true);
      }}
    >
        <TextInput
          value={value}
          placeholder={placeholder}
          inputMode={type === 'password' ? 'text' : type}
          style={{
            ...styles.authInput,
            borderColor: isInputFocused ? '#FF6C00' : '#E8E8E8',
          }}
          cursorColor="#FF6C00"
          secureTextEntry={type === 'password' ? !isShowPassword : false}
          onChangeText={onChange}
          onFocus={() => {
            {
              console.log(`onFocus ${type}`);
              setIsInputFocused(true);
            }
          }}
          onBlur={() => {
            console.log(`onBlur ${type}`);
            setIsInputFocused(false);
          }}
        />
        {type === 'password' && (
          <TouchableOpacity
            style={styles.showPasswordButton}
            onPress={() => setIsShowPassword(!isShowPassword)}
          >
            <Text style={styles.showPasswordButtonText}>
              {isShowPassword ? 'Приховати' : 'Показати'}
            </Text>
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
    width: '100%',
    height: 50,
    paddingLeft: 16,
    paddingRight: 16,
    borderRadius: 8,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  authInputFocused: {
    borderColor: '#FF6C00',
  },
  showPasswordButton: {
    position: 'absolute',
    top: 16,
    right: 16,
  },
  showPasswordButtonText: {
    color: '#1B4371',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default AuthInput;
