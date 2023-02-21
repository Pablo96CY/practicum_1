import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage';
import IngredientPage from '../../pages/IngredientPage/IngredientPage';
import LoginFormPage from '../../pages/LoginFormPage/LoginFormPage';
import LogoutPage from '../../pages/LogoutPage/LogoutPage';
import MainPage from '../../pages/MainPage/MainPage';
import OthersPage from '../../pages/OthersPage/OthersPage';
import ProfileEditPage from '../../pages/Profile/ProfileEditPage/ProfileEditPage';
import ProfileMainPage from '../../pages/Profile/ProfileMainPage/ProfileMainPage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import ResetPasswordPage from '../../pages/ResetPasswordPage/ResetPasswordPage';
import { 
  BASE_ROOT, 
  FORGOT_PASSWORD_ROOT, 
  INGREDIENTS_ROOT, 
  LOGIN_ROOT,
  LOGOUT_ROOT,
  OTHERS_ROOT,
  PROFILE_ROOT,
  REGISTRATON_FORM_ROOT,
  RESET_PASSWORD_ROOT,
} from '../../utils/routes';
import ProtectedRoutes from '../ProtectedRoutes/ProtectedRoutes';

const RoutesComponent = () => {
  const location = useLocation();

  const background = location.state && location.state.background;

  return (
    <Routes location={background || location}>
      <Route 
        path={BASE_ROOT} 
        element={
          <MainPage/>
        } 
      />
      <Route 
        path={LOGIN_ROOT} 
        element={
          <LoginFormPage/>
        } 
      />
      <Route 
        path={REGISTRATON_FORM_ROOT} 
        element={
          <RegistrationPage/>
        }
      />
      <Route 
        path={FORGOT_PASSWORD_ROOT} 
        element={
          <ForgotPasswordPage/>
        } 
      />
      <Route 
        path={RESET_PASSWORD_ROOT} 
        element={
          <ResetPasswordPage/>
        } 
      />
      <Route 
        path={OTHERS_ROOT} 
        element={
          <OthersPage/>
        } 
      />
      <Route 
        path={PROFILE_ROOT} 
        element={
          <ProtectedRoutes 
            element={
              <ProfileMainPage/>
            }
          />
        }
      >
        <Route 
          index 
          element={
            <ProfileEditPage/>
          } 
        />
      </Route>
      <Route 
        path={`${INGREDIENTS_ROOT}/:id`} 
        element={
          <IngredientPage/>
        } 
      />
      <Route 
        path={LOGOUT_ROOT} 
        element={
          <LogoutPage/>
        } 
      />
    </Routes>
  );
}

export default RoutesComponent;