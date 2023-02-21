import { useEffect } from 'react';
import propTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { BASE_ROOT, LOGIN_ROOT } from '../../utils/routes';
import { getUserDataAction } from '../../services/UserData/actions';
import { CLEAR_AUTH, CLEAR_TOKEN, loginAction, tokenAction } from '../../services/Authorization/actions';
import localize from '../../utils/localize';

const ProtectedRoutes = ({element}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const from = location.state?.from || BASE_ROOT;

  const { errorUserData, user } = useSelector(store => store.userReducer);

  const { isLogged } = useSelector(store => store.authReducer);

  const { 
    errorAuthorization, 
    successAuthorization,
    errorToken, 
    successToken 
  } = useSelector(store => store.authReducer);

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
      dispatch(loginAction());
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

  return ((!!user?.name && user.name !== '') || isLogged) && element;
}

ProtectedRoutes.propTypes = {
  element: propTypes.element.isRequired
}

export default ProtectedRoutes;