import { FlatList, StyleSheet, View } from 'react-native';
import Post from './Post';
import posts from '../data/postsData';
import colors from '../constants/colors';

const { white } = colors;

const PostsList = () => {
  return (
    // <View style={styles.postListContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post postInfo={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.postList}
        style={styles.postListContainer}
      />
    // </View>
  );
};

const styles = StyleSheet.create({
  postListContainer: {
    width: '100%',
    // paddingBottom: 0,
    // backgroundColor: 'green',
  },
  postList: {
    gap: 34,
    paddingBottom: 34,
    // backgroundColor: 'grey',
  },
});

export default PostsList;
