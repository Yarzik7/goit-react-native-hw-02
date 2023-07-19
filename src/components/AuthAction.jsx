import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AuthAction = ({ activeScreen, setActiveScreen, onSubmit }) => {
  const navToAuthScreen = () => setActiveScreen(activeScreen === 'login' ? 'signUp' : 'login');

  return (
    <View style={styles.authActionContainer}>
      <TouchableOpacity style={styles.authActionButton} onPress={onSubmit}>
        <Text style={styles.authActionButtonText}>
          {activeScreen === 'login' ? 'Увійти' : 'Зареєструватися'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={navToAuthScreen}>
        <Text style={styles.linkText}>
          {activeScreen === 'login' ? 'Немає акаунту? Зареєструватися' : 'Вже є акаунт? Увійти'}
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
    backgroundColor: '#FF6C00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  authActionButtonText: {
    fontFamily: 'Roboto-Regular',
    color: '#fff',
  },
  link: {
    marginTop: 16,
  },
  linkText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
    color: '#1B4371',
  },
});

export default AuthAction;
