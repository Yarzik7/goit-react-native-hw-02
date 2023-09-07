import { View, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import BottomNavigator from 'navigators/BottomNavigator';
import UserInfo from '../components/UserInfo';

const Tabs = createBottomTabNavigator();

const PostsScreen = () => {
  const navigation = useNavigation();
  const {
    params: { login = '', email = '', avatarPath },
  } = useRoute();

  console.log(`PostsScreen ${login} ${email} ${avatarPath}`);
  return (
    <View>
      <UserInfo login={login} email={email} avatarPath={avatarPath} />
    </View>
  );
};

export default PostsScreen;
