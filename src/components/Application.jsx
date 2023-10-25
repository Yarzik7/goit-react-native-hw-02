import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../routes/MainNavigator';

const Application = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Application;
