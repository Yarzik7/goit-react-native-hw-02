import { Feather } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';
import color from '../constants/colors';
const { accentColor, emailColor, white, borderColor } = color;

const bottomNavigatorOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color }) => {
    const screens = {
      Posts: 'grid',
      CreatePosts: 'plus',
      Profile: 'user',
    };

    const iconName = screens[route.name] ?? 'x-circle';

    return (
      <Feather name={iconName} size={24} color={color} style={[styles.tab, focused && styles.activeTab]} />
    );
  },
  tabBarStyle: [styles.tabBar, null],
  tabBarActiveTintColor: white,
  tabBarInactiveTintColor: emailColor,
  tabBarShowLabel: false,
  headerStyle: styles.header,
});

const styles = StyleSheet.create({
  tabBar: {
    height: 71,
    paddingHorizontal: '20%',
  },
  header: {
    backgroundColor: white,
    borderBottomColor: borderColor,
    borderBottomWidth: 1,
    height: 88,
  },
  tab: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  activeTab: {
    backgroundColor: accentColor,
    height: 40,
    width: 70,
    borderRadius: 20,
  },
});

export { bottomNavigatorOptions };
