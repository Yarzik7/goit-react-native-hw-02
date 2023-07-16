import { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const AuthInput = ({ type, placeholder, value, onChange }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        inputMode={type}
        style={styles.input}
        secureTextEntry={type === 'password' ? !isShowPassword : false}
      />
      {type === 'password' && (
        <TouchableOpacity
          style={styles.showButton}
          onPress={() => {
            setIsShowPassword(!isShowPassword);
          }}
        >
          <Text style={styles.loginLinkText}>
            {isShowPassword ? 'Приховати' : 'Показати'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 50,
    borderRadius: 8,
    padding: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    position: 'relative',
  },
  showButton: {
    ...this.loginLink,
    position: 'absolute',
    top: 16,
    right: 16,
  },
  loginLink: {
    marginTop: 16,
  },
  loginLinkText: {
    color: '#1B4371',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
});

export default AuthInput;
