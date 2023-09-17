import { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import color from '../constants/colors';
const { linkColor, accentColor, white, backgroundColor, borderColor, secondaryTextColor } = color;

const PostInfoInput = ({ Icon, placeholder, value = '', onChange = () => { } }) => {
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
          isInputFocused && styles.authInputFocused,
          Icon && styles.inputLeftPadding,
        ]}
        cursorColor={accentColor}
        onChangeText={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {Icon}
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
  authInputFocused: {
    backgroundColor: white,
    borderColor: accentColor,
  },
});

export default PostInfoInput;
