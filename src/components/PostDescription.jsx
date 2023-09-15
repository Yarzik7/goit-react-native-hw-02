import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import color from '../constants/colors';
const { secondaryTextColor, accentColor, primaryTextColor } = color;

const PostDescription = ({ commentsCount = 0, likesCount = 0, location = 'Location' }) => {
  return (
    <View style={styles.descriptionContainer}>
      <TouchableOpacity style={styles.descriptionItem}>
        <FontAwesome
          name={commentsCount ? 'comment' : 'comment-o'}
          size={24}
          color={commentsCount ? accentColor : primaryTextColor}
          style={styles.commentIcon}
        />
        <Text style={styles.descriptionText}>{commentsCount}</Text>
      </TouchableOpacity>

      <View style={[styles.descriptionItem, styles.likes]}>
        <Feather name="thumbs-up" size={24} color={likesCount ? accentColor : primaryTextColor} />
        <Text style={styles.descriptionText}>{likesCount}</Text>
      </View>

      <TouchableOpacity style={[styles.descriptionItem, styles.location]}>
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
    fontSize: 16,
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
