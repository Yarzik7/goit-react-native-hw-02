import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import color from '../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { changeLike } from '../redux/posts/operations';
import { useDispatch } from 'react-redux';
const { secondaryTextColor, accentColor, primaryTextColor } = color;

const PostDescription = ({
  postId,
  label,
  coords,
  img,
  commentsCount = 0,
  likesCount = 0,
  reviewers,
  location = 'Location',
}) => {
  const navigator = useNavigation();
  const dispatch = useDispatch();

  const navigateToComments = async () => navigator.navigate('CommentsScreen', { img, postId });
  const navigateToMap = () => navigator.navigate('MapScreen', { label, coords, location });
  const onChangeLike = async () => await dispatch(changeLike(postId));

  return (
    <View style={styles.descriptionContainer}>
      <TouchableOpacity style={styles.descriptionItem} onPress={navigateToComments}>
        <FontAwesome
          name={reviewers ? 'comment' : 'comment-o'}
          size={24}
          color={reviewers ? accentColor : primaryTextColor}
          style={styles.commentIcon}
        />
        <Text style={styles.descriptionText}>{commentsCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.descriptionItem, styles.likes]} onPress={onChangeLike}>
        <Feather name="thumbs-up" size={24} color={likesCount ? accentColor : primaryTextColor} />
        <Text style={styles.descriptionText}>{likesCount}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.descriptionItem, styles.location]} onPress={navigateToMap}>
        <Feather name="map-pin" size={24} color={primaryTextColor} />
        <Text style={[styles.descriptionText, styles.locationText]}>{location}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  descriptionContainer: {
    flexDirection: 'row',
  },
  descriptionItem: {
    flexDirection: 'row',
    textAlignVertical: 'center',
    gap: 6,
    fontSize: 16,
  },
  descriptionText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    color: secondaryTextColor,
  },
  locationText: {
    textDecorationLine: 'underline',
  },
  location: {
    marginLeft: 'auto',
  },
  likes: {
    marginLeft: 24,
  },
  commentIcon: {
    transform: [{ scaleX: -1 }],
  },
});

export default PostDescription;
