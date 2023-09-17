import { Feather } from '@expo/vector-icons';
import color from '../constants/colors';
const { accentColor, emailColor, white } = color;

const bottomNavigatorOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Posts':
        iconName = 'grid';
        break;
      case 'CreatePosts':
        iconName = 'plus';
        break;
      case 'Profile':
        iconName = 'user';
        break;
      default:
        iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
    }

    return (
      <Feather
        name={iconName}
        size={24}
        color={color}
        style={[
          { textAlign: 'center', textAlignVertical: 'center' },
          focused && {
            backgroundColor: accentColor,
            height: 40,
            width: 70,
            borderRadius: 20,
          },
        ]}
      />
    );
  },
  tabBarStyle: [
    {
      display: 'flex',
      height: 71,
    },
    null,
  ],
  tabBarActiveTintColor: white,
  tabBarInactiveTintColor: emailColor,
  tabBarShowLabel: false,
  headerStyle: {
    backgroundColor: '#FFF',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    height: 88,
  },
});

export { bottomNavigatorOptions };
