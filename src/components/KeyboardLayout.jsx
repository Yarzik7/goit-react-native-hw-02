import { Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import colors from '../constants/colors';

const KeyboardLayout = ({ shouldRenderComponent, keyboardVerticalOffset, children }) => {
  return (
    <>
      {shouldRenderComponent ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={keyboardVerticalOffset}
            style={styles.container}
          >
            {children}
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  authContainer: {
    paddingHorizontal: 16,

    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    maxHeight: '80%',
  },
  backgroundView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  paddingLogin: {
    paddingBottom: 111,
  },
});

export default KeyboardLayout;
