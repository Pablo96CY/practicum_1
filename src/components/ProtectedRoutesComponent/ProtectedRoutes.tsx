import React, { FC, ReactElement, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { BASE_ROOT, LOGIN_ROOT } from '../../utils/routes';
import { getUserDataAction } from '../../services/UserData/actions';
import { CLEAR_AUTH, CLEAR_TOKEN, tokenAction } from '../../services/Authorization/actions';
import localize from '../../utils/localize';
import { TRootState } from '../../utils/types';
import { useDispatch, useSelector } from '../../utils/helpers';

interface IProps {
  element: ReactElement
}

const ProtectedRoutes: FC<IProps> = ({element}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const from = location.pathname || BASE_ROOT;

  const { user } = useSelector(store => store.userReducer);

  const { errorUserData } = useSelector(store => store.userReducer);

  const { isLogged } = useSelector(store => store.authReducer);

  const { 
    errorAuthorization, 
    successAuthorization,
    errorToken, 
    successToken 
  } = useSelector((store: TRootState) => store.authReducer);

  useEffect(() => {
    dispatch(getUserDataAction());
  }, [dispatch]);

  useEffect(() => {
    if(errorUserData) {
      if (errorUserData === localize.JWTError) {
        dispatch(tokenAction());
      } else {
        navigate(LOGIN_ROOT, { replace: true, state: { from } });
      }
    }
  }, [
    dispatch, 
    errorUserData, 
    navigate, 
  ]);

  useEffect(() => {
    if(errorToken) {
      dispatch({
        type: CLEAR_TOKEN
      });
      navigate(LOGIN_ROOT, { replace: true, state: { from } });
    } 
    if(successToken) {
      dispatch({
        type: CLEAR_TOKEN
      });
    }
  }, [
    dispatch, 
    errorToken, 
    successToken, 
    navigate, 
  ]);

  useEffect(() => {
    if(successAuthorization) {
      dispatch({
        type: CLEAR_AUTH
      });
      dispatch(getUserDataAction());
    } 
    if(errorAuthorization) {
      dispatch({
        type: CLEAR_AUTH
      });
      navigate(LOGIN_ROOT, { replace: true, state: { from } });
    }
  }, [
    dispatch, 
    errorAuthorization,
    successAuthorization,  
    navigate, 
  ]);

  return ((!!user?.name && user.name !== '') || isLogged) ? element : <div>{localize.Loading}</div>;
}

export default ProtectedRoutes;