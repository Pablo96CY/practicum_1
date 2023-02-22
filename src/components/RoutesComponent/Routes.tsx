import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import ForgotPasswordPage from '../../pages/PasswordForgotPage/PasswordForgotPage';
import IngredientPage from '../../pages/IngredientsPage/IngredientsPage';
import LoginFormPage from '../../pages/LoginPage/LoginPage';
import LogoutPage from '../../pages/LogoutRedirectPage/LogoutRedirectPage';
import MainPage from '../../pages/BasePage/BasePage';
import OthersPage from '../../pages/NotFoundPage/NotFoundPage';
import ProfileEditPage from '../../pages/ProfilePage/ProfileEditPage/ProfileEditPage';
import ProfileMainPage from '../../pages/ProfilePage/ProfileMainPage/ProfileMainPage';
import RegistrationPage from '../../pages/RegistratePage/RegistratePage';
import ResetPasswordPage from '../../pages/PasswordResetPage/PasswordResetPage';
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
import ProtectedRoutes from '../ProtectedRoutesComponent/ProtectedRoutes';

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