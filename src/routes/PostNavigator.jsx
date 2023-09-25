import { createStackNavigator } from '@react-navigation/stack';
import { PostsScreen, CommentsScreen, MapScreen } from '../screens';
import postsNavigationOptions from '../helpers/postsNavigationOptions';
import LogoutButton from '../components/LogoutButton';

const PostStack = createStackNavigator();

const PostNavigator = () => {
  return (
    <PostStack.Navigator initialRouteName="Posts" screenOptions={postsNavigationOptions}>
      <PostStack.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={() => ({
          title: 'Публікації',
          headerRight: () => <LogoutButton />,
          headerLeft: null,
        })}
      />
      <PostStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={() => ({
          title: 'Коментарі',
        })}
      />
      <PostStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={() => ({
          title: 'Карта',
        })}
      />
    </PostStack.Navigator>
  );
};

export default PostNavigator;
