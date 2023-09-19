import { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import color from '../constants/colors';
const { accentColor, white, borderColor, secondaryTextColor } = color;

const PostInfoInput = ({ placeholder, value, onChange, children }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const onFocus = () => setIsInputFocused(true);

  const onBlur = () => setIsInputFocused(false);

  return (
    <View style={styles.postInfoInputContainer}>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={[
          styles.postInfoInput,
          isInputFocused && styles.postInputFocused,
          children && styles.inputLeftPadding,
        ]}
        cursorColor={accentColor}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  postInfoInputContainer: {
    position: 'relative',
  },
  postInfoInput: {
    height: 50,
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: secondaryTextColor,
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  inputLeftPadding: {
    paddingLeft: 28,
  },
  postInputFocused: {
    backgroundColor: white,
    borderBottomColor: accentColor,
  },
});

export default PostInfoInput;
