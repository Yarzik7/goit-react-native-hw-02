import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen, CreatePostsScreen, ProfileScreen } from '../screens';
import { bottomNavigatorOptions } from '../helpers';
import LogoutButton from '../components/LogoutButton';
import ArrowButton from '../components/ArrowButton';

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
          headerRight: () => <LogoutButton />,
        })}
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePostsScreen}
        options={() => ({
          headerBackVisible: false,
          title: 'Створити публікацію',
          headerTitleAlign: 'center',
          headerLeft: () => <ArrowButton />,
          tabBarStyle: {
            display: 'none',
          },
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

export default BottomNavigator;
