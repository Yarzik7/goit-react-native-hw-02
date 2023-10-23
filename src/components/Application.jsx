import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from '../routes/MainNavigator';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshingUser, selectToken } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import ScreenLoader from './Loaders/ScreenLoader';

const Application = () => {
  //   const dispatch = useDispatch();
  //   const isRefreshingUser = useSelector(selectIsRefreshingUser);
  //   const token = useSelector(selectToken);

  // //   console.log('token', token);

  //   useEffect(() => {
  //     dispatch(refreshUser());
  //   }, [dispatch]);

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default Application;
