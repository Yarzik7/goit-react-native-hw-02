import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';

import color from '../constants/colors';
const { linkColor } = color;

const AuthAction = ({ activeAuthScreen, onSubmit }) => {
  const navigation = useNavigation();
  const navToAuthScreen = () => navigation.navigate(activeAuthScreen === 'Login' ? 'Registration' : 'Login');

  return (
    <View style={styles.authActionContainer}>
      <Button text={activeAuthScreen === 'Login' ? 'Увійти' : 'Зареєструватися'} onSubmit={onSubmit} />
      <TouchableOpacity style={styles.link} onPress={navToAuthScreen}>
        <Text style={styles.linkText}>
          {activeAuthScreen === 'Login' ? (
            <>
              Немає акаунту? <Text style={styles.signUpLink}>Зареєструватися</Text>
            </>
          ) : (
            'Вже є акаунт? Увійти'
          )}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  authActionContainer: {
    marginTop: 43,
  },
  link: {
    alignSelf: 'center',
    marginTop: 16,
  },
  linkText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    color: linkColor,
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
});

export default AuthAction;
