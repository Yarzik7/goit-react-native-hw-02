import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PostsScreen, CreatePostsScreen, ProfileScreen } from '../screens';
import { bottomNavigatorOptions } from '../helpers';
import PostNavigator from './PostNavigator';
import LogoutButton from '../components/LogoutButton';
import ArrowButton from '../components/ArrowButton';
import { useIsFocused, useRoute } from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  // const isFocused = useIsFocused();
  // console.log(isFocused);
  // const route = useRoute();
  // console.log(route);
  return (
    <Tabs.Navigator initialRouteName="PostsNavigator" screenOptions={(route)=>bottomNavigatorOptions(route)}>
      {/* <Tabs.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          headerBackVisible: false,
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerRight: () => <LogoutButton />,
        })}
      /> */}
      <Tabs.Screen name="PostsNavigator" component={PostNavigator} options={{ headerShown: false }} />
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
