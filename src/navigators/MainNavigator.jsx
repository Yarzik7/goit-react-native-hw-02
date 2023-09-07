import { createStackNavigator } from '@react-navigation/stack';
import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
import PostsScreen from '../screens/PostsScreen';
import BottomNavigator from './BottomNavigator';

const MainStack = createStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator initialRouteName="Login">
      <MainStack.Screen name="Registration" component={RegistrationScreen} />
      <MainStack.Screen name="Login" component={LoginScreen} />
      <MainStack.Screen name="BottomTabs" component={BottomNavigator} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
