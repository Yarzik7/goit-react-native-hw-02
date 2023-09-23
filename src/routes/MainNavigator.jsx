import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import BottomNavigator from './BottomNavigator';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="LoginScreen">
      <MainStack.Screen name="RegistrationScreen" component={RegistrationScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
      <MainStack.Screen name="BottomTabs" component={BottomNavigator} options={{ headerShown: false }} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
