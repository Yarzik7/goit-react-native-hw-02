import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import color from '../constants/colors';
const { secondaryTextColor, backgroundColor, white, primaryTextColor, accentColor, buttonDisabledColor } =
  color;

const Button = ({ text, disabled = false, Icon, buttonStyles, children, onSubmit = () => {} }) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onSubmit}
    >
      <Text style={[styles.buttonText, disabled && styles.buttonDisabledText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: accentColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: white,
  },
  buttonDisabled: {
    backgroundColor: buttonDisabledColor,
  },
  buttonDisabledText: {
    color: primaryTextColor,
  },
});

export default Button;
