import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { PostsScreen, CreatePostsScreen, ProfileScreen } from '../screens';
import { bottomNavigatorOptions } from '../helpers';
import { StyleSheet } from 'react-native';
import color from '../constants/colors';
const { accentColor, emailColor } = color;

const BottomStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={bottomNavigatorOptions}
    >
      <Tabs.Screen name="Posts" component={PostsScreen} />
      <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
      <Tabs.Screen name="Profile" component={ProfileScreen} />
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabsNavigator: {
    backgroundColor: 'white',
    height: 100,
  },
});

export default BottomNavigator;
