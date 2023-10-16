import ImageBackgroundLayout from './ImageBackgroundLayout';
import KeyboardLayout from './KeyboardLayout';
import ScreenLoader from './Loaders/ScreenLoader';
import { selectIsAuthLoading } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { useRoute } from '@react-navigation/native';

const AuthLayout = ({ contentContainerStyles, children }) => {
  const { name: screenName } = useRoute();
  const isAuthLoading = useSelector(selectIsAuthLoading);
  return (
    <KeyboardLayout keyboardVerticalOffset={screenName === 'Login' ? -208 : -142}>
      <ImageBackgroundLayout contentContainerStyles={contentContainerStyles}>
        {children}
      </ImageBackgroundLayout>
      {isAuthLoading && <ScreenLoader />}
    </KeyboardLayout>
  );
};

export default AuthLayout;
