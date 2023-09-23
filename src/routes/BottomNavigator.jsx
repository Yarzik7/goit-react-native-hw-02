import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CreatePostsScreen, ProfileScreen } from '../screens';
import { bottomNavigatorOptions } from '../helpers';
import PostNavigator from './PostNavigator';
import ArrowButton from '../components/ArrowButton';

const Tabs = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tabs.Navigator initialRouteName="PostsNavigator" screenOptions={bottomNavigatorOptions}>
      <Tabs.Screen name="PostsNavigator" component={PostNavigator} options={{ headerShown: false }} />
      <Tabs.Screen
        name="CreatePostsScreen"
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Tabs.Navigator>
  );
};

export default BottomNavigator;
