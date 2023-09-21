import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen, CommentsScreen } from '../screens';
import ArrowButton from '../components/ArrowButton';
import LogoutButton from '../components/LogoutButton';

import colors from '../constants/colors';
const { white, borderColor } = colors;

const PostStack = createStackNavigator();

const PostNavigator = () => {
  return (
    <PostStack.Navigator
      initialRouteName="Posts"
      screenOptions={{
        tabBarShowLabel: false,
        headerBackVisible: false,
        headerTitleAlign: 'center',
        headerLeft: () => <ArrowButton />,
        headerStyle: {
          backgroundColor: white,
          borderBottomColor: borderColor,
          borderBottomWidth: 1,
          height: 88,
        },
      }}
    >
      <PostStack.Screen
        name="Posts"
        component={PostsScreen}
        options={() => ({
          title: 'Публікації',
          headerTitleAlign: 'center',
          headerRight: () => <LogoutButton />,
        })}
      />
      <PostStack.Screen
        name="Comments"
        component={CommentsScreen}
        options={() => ({
          title: 'Коментарі',
          tabBarStyle: { display: 'none' },
        })}
      />
    </PostStack.Navigator>
  );
};

export default PostNavigator;
