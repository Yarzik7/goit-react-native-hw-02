import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import MainNavigator from './src/routes/MainNavigator';
// import { loginDB, registerDB, getCities, authStateChanged, updateUserProfile } from './config';



// (async function () {
//   await registerDB({login:'User1',email: 'email1@gmail.com', password: 'pass1wASdsad'});
// })()



const App = () => {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
