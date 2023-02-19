import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import commonStyle from "../../utils/commonPageStyles.module.css";
import localize from '../../utils/localize';
import { LOGIN_ROOT, PROFILE_ROOT, RESET_PASSWORD_ROOT } from '../../utils/routes';
import { CLEAR_RESET_PASSWORD, forgotPasswordAction } from '../../services/PasswordOperations/actions';
import { CLEAR_USER_DATA, getUserDataAction } from '../../services/UserData/actions';
import { CLEAR_AUTH } from '../../services/Authorization/actions';

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ email, setEmail ] = useState('');

  const { user } = useSelector(store => store.userReducer);

  const { successPassword, errorPassword } = useSelector(store => store.passwordReducer);

  useEffect(() => {
    dispatch(getUserDataAction());
  }, [dispatch]);

  useEffect(() => {
    if(!!user?.name && user.name !== '') {
      dispatch({
        type: CLEAR_USER_DATA
      })
      dispatch({
        type: CLEAR_AUTH
      })
      navigate(PROFILE_ROOT, { replace: true });
    }
  }, [
    user?.name, 
    navigate, 
    dispatch
  ]);

  useEffect(() => {
    if(successPassword) {
      dispatch({
        type: CLEAR_RESET_PASSWORD
      });
      navigate(RESET_PASSWORD_ROOT, { replace: true });
    }
    if(errorPassword) {
      alert(localize.ResetPasswordError);
    }
  }, [
    successPassword, 
    errorPassword,
    dispatch
  ]);

  const sendEmail = () => {
    dispatch(forgotPasswordAction(email));
  };

  return (
    <main className={commonStyle.pages_form_container}>
      <form className={commonStyle.pages_container_inner}>
        <h1 className={`${commonStyle.pages_form_h1} text text_type_main-medium`}>
          {localize.ChangingPassword}
        </h1>
        <EmailInput 
          extraClass={commonStyle.pages_form_p_email_password}  
          placeholder={localize.InputEmail}
          name="email" 
          value={email} 
          onChange={(el) => {
            setEmail(el.target.value);
          }}
        />
        <Button 
          type="primary" 
          extraClass={commonStyle.pages_form_button}
          htmlType="button"
          onClick={sendEmail}
        >
          {localize.ChangePassword}
        </Button>
        <p className="text text_type_main-default text_color_inactive">
            {localize.DontForgotPassword}
          <Link 
            className={commonStyle.page_link} 
            to={LOGIN_ROOT}
          >
            {localize.ToLogin}
          </Link>
        </p>
      </form>
    </main>
  );
}

export default ForgotPasswordPage;