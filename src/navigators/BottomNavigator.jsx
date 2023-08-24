import { createStackNavigator } from '@react-navigation/stack';

const BottomStack = createStackNavigator();

const BottomNavigator = () => {
  return (
    <BottomStack.Navigator initialRouteName="Login">
      <BottomStack.Screen name="Registration" component={RegistrationScreen} />
      <BottomStack.Screen name="Login" component={LoginScreen} />
      <BottomStack.Screen name="Posts" component={PostsScreen} />
    </BottomStack.Navigator>
  );
};

export default BottomNavigator;
