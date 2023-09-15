import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Feather } from '@expo/vector-icons';
import { PostsScreen, CreatePostsScreen, ProfileScreen } from '../screens';
import { bottomNavigatorOptions } from '../helpers';
import { StyleSheet, TouchableOpacity } from 'react-native';
import LogoutButton from '../components/LogoutButton';
import ArrowButton from '../components/ArrowButton';
import color from '../constants/colors';
const { accentColor, emailColor } = color;

const BottomStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator initialRouteName="Posts" screenOptions={bottomNavigatorOptions}>
      <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          headerBackVisible: false,
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerRight: LogoutButton,
          headerLeft: '',
          tabBarLabel: '',
        })}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={() => ({
          headerBackVisible: false,
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          headerLeft: ArrowButton,
          tabBarLabel: '',
        })}
      />
      <Tabs.Screen
        name="Profile"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
        })}
      />
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
