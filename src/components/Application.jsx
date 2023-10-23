import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../routes/MainNavigator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshingUser } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import ScreenLoader from './Loaders/ScreenLoader';

const Application = () => {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(selectIsRefreshingUser);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshingUser ? (
    <>
      <ScreenLoader />
    </>
  ) : (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Application;
