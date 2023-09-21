import { View, Image, TextInput } from 'react-native';
import KeyboardLayout from '../components/KeyboardLayout';
import CommentsList from '../components/CommentsList';

const CommentsScreen = ({ navigation }) => {
  // navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
  return (
    <KeyboardLayout>
      <View>
        {/* <Image /> */}
        <CommentsList />
        {/* <TextInput /> */}
      </View>
    </KeyboardLayout>
  );
};

export default CommentsScreen;
