import { type FC, useEffect } from 'react';
import type { TPrivateRoute } from './type';
import { selectIsAuth } from '../../services/slices/profileSlice';
import { useAppSelector } from '../../utils/hooks';
import { useNavigate } from 'react-router-dom';
import PathConstants from '../path-constants';

export const PrivateRoute: FC<TPrivateRoute> = ({ children, onlyUnAuth }) => {
  const navigate = useNavigate();
  const isAuth = useAppSelector(selectIsAuth);

  useEffect(() => {
    if (!onlyUnAuth && !isAuth) {
      navigate(PathConstants.REGISTRATION);
    }
    if (onlyUnAuth && isAuth) {
      navigate(PathConstants.HOME);
    }
  }, [isAuth, navigate]);

  return <>{children}</>;
};
