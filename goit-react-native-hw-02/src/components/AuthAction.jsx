import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AuthAction = ({ activeScreen, setActiveScreen }) => {
  return (
    <View>
      <TouchableOpacity style={styles.registerButton} onPress={() => {}}>
        <Text style={styles.registerButtonText}>
          {activeScreen === 0 ? 'Увійти' : 'Зареєструватися'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => {
          setActiveScreen(activeScreen === 0 ? 1 : 0);
        }}
      >
        <Text style={styles.loginLinkText}>
          {activeScreen === 0 ? 'Зареєструватися' : "Вже є акаунт? Увійти"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  registerButton: {
    backgroundColor: '#FF6C00',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: '400',
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

export default AuthAction;
