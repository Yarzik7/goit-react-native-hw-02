import { View, Image, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';
const { secondaryTextColor, emailColor, backgroundColor } = colors;

const UserInfo = ({ login='Name', email='example@email.com', avatarPath }) => {
  return (
    <View style={styles.infoContainer}>
      <Image source={{ uri: avatarPath }} resizeMode="cover" style={styles.avatar} />
      <View>
        <Text style={styles.loginText}>{login}</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor,
  },
  loginText: {
    fontFamily: 'Roboto-Bold',
    fontSize: 13,
    color: secondaryTextColor,
  },
  emailText: {
    fontFamily: 'Roboto-Regular',
    fontSize: 11,
    color: emailColor,
  },
});

export default UserInfo;
