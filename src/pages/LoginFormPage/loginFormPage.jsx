import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { 
  BASE_ROOT,
  FORGOT_PASSWORD_ROOT, 
  REGISTRATON_FORM_ROOT 
} from '../../utils/routes';
import commonStyle from "../../utils/commonPageStyles.module.css";
import localize from '../../utils/localize';
import { CLEAR_USER_DATA, getUserDataAction } from '../../services/UserData/actions';
import { CLEAR_AUTH, CLEAR_TOKEN, loginAction } from '../../services/Authorization/actions';
import { CLEAR_RESET_PASSWORD } from '../../services/PasswordOperations/actions';

const LoginFormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(store => store.userReducer);

  const { isLogged } = useSelector(store => store.authReducer);

  const { successRegistration } = useSelector(store => store.registReducer);

  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  useEffect(() => {
    dispatch({
      type: CLEAR_RESET_PASSWORD
    });
    if(successRegistration) {
      alert(localize.SuccessDataSave);
    } else dispatch(getUserDataAction());
  }, [
    successRegistration,
    dispatch
  ]);

  useEffect(() => {
    if((!!user?.name && user.name !== '') || isLogged) {
      dispatch({
        type: CLEAR_USER_DATA
      })
      dispatch({
        type: CLEAR_AUTH
      })
      dispatch({
        type: CLEAR_TOKEN
      })
      navigate(BASE_ROOT, { replace: true });
    }
  }, [
    user?.name, 
    isLogged, 
    navigate, 
    dispatch
  ]);

  const applyForm = (e) => {
    const form = {
      email: email,
      password: password
    }
    e.preventDefault();
    dispatch(loginAction(form));
  };

  return (
    <main className={commonStyle.pages_form_container}>
      <form className={commonStyle.pages_container_inner} onSubmit={applyForm}>
        <h1 className={`${commonStyle.pages_form_h1} text text_type_main-medium`}>
          {localize.Entrance}
        </h1>
        <EmailInput 
          extraClass={commonStyle.pages_form_p_email_password}  
          name="email" 
          value={email} 
          onChange={(el) => {
            setEmail(el.target.value)
          }}
        />
        <PasswordInput 
          extraClass={commonStyle.pages_form_p_email_password} 
          name="password" 
          value={password} 
          onChange={(el) => {
            setPassword(el.target.value)
          }}
        />
        <Button 
          type="primary" 
          extraClass={commonStyle.pages_form_button}
          htmlType="submit"
        >
          {localize.ToLogin}
        </Button>
        <p className={`${commonStyle.pages_form_p_email_password}  text text_type_main-default text_color_inactive`}>
          {localize.NewUser}
          <Link 
            className={commonStyle.page_link}
            to={REGISTRATON_FORM_ROOT}
          >
            {localize.MakeRegistration}
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive">
          {localize.ForgotPassword}
          <Link 
            className={commonStyle.page_link}
            to={FORGOT_PASSWORD_ROOT}
          >
            {localize.ChangePassword}
          </Link>
        </p>
      </form>
    </main>
  );
}

export default LoginFormPage;