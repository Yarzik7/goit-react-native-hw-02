import ImageBackgroundLayout from './ImageBackgroundLayout';
import KeyboardLayout from './KeyboardLayout';
import { useRoute } from '@react-navigation/native';

const AuthLayout = ({ contentContainerStyles, children }) => {
  const { name: screenName } = useRoute();
  return (
    <KeyboardLayout keyboardVerticalOffset={screenName === 'Login' ? -208 : -142}>
      <ImageBackgroundLayout contentContainerStyles={contentContainerStyles}>
        {children}
      </ImageBackgroundLayout>
    </KeyboardLayout>
  );
};

export default AuthLayout;
