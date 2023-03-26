import React from 'react';
import { 
  Routes, 
  Route, 
  useLocation, 
  useNavigate 
} from 'react-router-dom';

import { 
  BASE_ROOT, 
  FEED_ROOT, 
  FORGOT_PASSWORD_ROOT, 
  INGREDIENTS_ROOT, 
  LOGIN_ROOT,
  LOGOUT_ROOT,
  OTHERS_ROOT,
  PROFILE_ORDERS_ROOT,
  PROFILE_ROOT,
  REGISTRATON_FORM_ROOT,
  RESET_PASSWORD_ROOT,
} from '../../utils/routes';
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
import ProtectedRoutes from '../ProtectedRoutesComponent/ProtectedRoutes';
import Modal from '../ModalComponent/Modal';
import OrderInfo from '../OrderInfoComponent/OrderInfo';
import FeedPage from '../../pages/FeedPage/FeedPage';
import OrderInfoPage from '../../pages/OrderInfoPage/OrderInfoPage';
import ProfileOrderPage from '../../pages/ProfilePage/ProfileOrderPage/ProfileOrderPage';

const RoutesComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const background = location.state && location.state.background;
  const stateLocation = location.state && location.state.location;

  const handleCloseModalDetail = () => {
    navigate(-1);
  }

  return (
    <>
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
          <Route 
            path={PROFILE_ORDERS_ROOT} 
            element={
              <ProfileOrderPage/>
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
        <Route 
          path={FEED_ROOT} 
          element={
            <FeedPage/>
          } 
        />
        <Route 
          path={`${FEED_ROOT}/:id`} 
          element={
            <OrderInfoPage/>
          } 
        />
        <Route 
          path={`${PROFILE_ORDERS_ROOT}/:id`} 
          element={
            <ProtectedRoutes 
              element={
                <OrderInfoPage/>
              }
            />
          }
        />
      </Routes>
      {stateLocation &&
        <Routes>
          <Route 
            path={`${FEED_ROOT}/:id`} 
            element={
              <Modal 
                isOrder={true} 
                onClose={handleCloseModalDetail}
              >
                <OrderInfo/>
              </Modal>
            } 
          />
          <Route 
            path={`${PROFILE_ORDERS_ROOT}/:id`} 
            element={
              <Modal 
                isOrder={true} 
                onClose={handleCloseModalDetail}
              >
                <OrderInfo/>
              </Modal>
            } 
          />
        </Routes>
      }
    </>
  );
}

export default RoutesComponent;