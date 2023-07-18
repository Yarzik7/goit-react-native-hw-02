import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AuthAction = ({ activeScreen, setActiveScreen }) => {
  return (
    <View style={styles.authActionContainer}>
      <TouchableOpacity style={styles.authActionButton} onPress={() => {}}>
        <Text style={styles.authActionButtonText}>
          {activeScreen === 0 ? 'Увійти' : 'Зареєструватися'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => {
          setActiveScreen(activeScreen === 0 ? 1 : 0);
        }}
      >
        <Text style={styles.linkText}>
          {activeScreen === 0
            ? 'Немає акаунту? Зареєструватися'
            : 'Вже є акаунт? Увійти'}
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
