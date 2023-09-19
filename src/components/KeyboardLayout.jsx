import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';

const KeyboardLayout = ({ keyboardVerticalOffset, keyboardContainerStyle = {}, children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={keyboardVerticalOffset}
        style={[styles.container, keyboardContainerStyle]}
      >
        {children}
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default KeyboardLayout;
