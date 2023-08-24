import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import color from '../constants/colors';
const { linkColor, accentColor, white } = color;

const AuthAction = ({ activeAuthScreen, setActiveScreen, onSubmit }) => {
  const navigation = useNavigation();
   const navToAuthScreen = () => navigation.navigate(activeAuthScreen === 'Login' ? 'Registration' : 'Login');
  // const navToAuthScreen = () => setActiveScreen(activeScreen === 'login' ? 'signUp' : 'login');

  return (
    <View style={styles.authActionContainer}>
      <TouchableOpacity style={styles.authActionButton} onPress={onSubmit}>
        <Text style={styles.authActionButtonText}>
          {activeAuthScreen === 'Login' ? 'Увійти' : 'Зареєструватися'}
        </Text>
      </TouchableOpacity>
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
  authActionButton: {
    backgroundColor: accentColor,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  authActionButtonText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: white,
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
