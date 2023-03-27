import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Input, 
  PasswordInput, 
  Button 
} from "@ya.praktikum/react-developer-burger-ui-components";

import commonStyle from "../../utils/commonPageStyles.module.css";
import localize from '../../utils/localize';
import { CLEAR_RESET_PASSWORD, resetPasswordAction } from '../../services/PasswordOperations/actions';
import { LOGIN_ROOT, PROFILE_ROOT } from '../../utils/routes';
import { CLEAR_USER_DATA, getUserDataAction } from '../../services/UserData/actions';
import { CLEAR_AUTH } from '../../services/Authorization/actions';
import { useDispatch, useSelector } from '../../utils/helpers';

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ password, setPassword ] = useState('');
  const [ code, setCode ] = useState('');

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
      navigate(LOGIN_ROOT, { replace: true });
    }
    if(errorPassword) {
      alert(localize.ResetPasswordError);
    }
  }, [
    successPassword, 
    errorPassword,
    dispatch
  ]);

  const sendCode = (e: FormEvent) => {
    const form = {
      password: password,
      token: code
    }
    e.preventDefault();
    dispatch(resetPasswordAction(form));
  };

  return (
    <main className={commonStyle.pages_form_container}>
      <form className={commonStyle.pages_container_inner} onSubmit={sendCode}>
        <h1 className={`${commonStyle.pages_form_h1} text text_type_main-medium`}>
          {localize.ResetPasswordTitle}
        </h1>
        <PasswordInput 
          extraClass={commonStyle.pages_form_p_email_password}
          placeholder={localize.InputNewPassword}
          name="password" 
          value={password} 
          onChange={(el) => {
            setPassword(el.target.value)
          }}
        />
        <Input 
          extraClass={commonStyle.pages_form_p_email_password}
          placeholder={localize.InputEmailCode} 
          name="code" 
          value={code} 
          onChange={(el) => { 
            setCode(el.target.value);
          }} 
        />
        <Button 
          type="primary" 
          extraClass={commonStyle.pages_form_button}
          htmlType="submit"
        >
          {localize.Save}
        </Button>
        <p className={`${commonStyle.pages_form_h1} "text text_type_main-default text_color_inactive`}>
          {localize.DontForgotPassword} 
          <Link 
            className="page-link" to={LOGIN_ROOT}
          >
            {localize.ToLogin}
          </Link>
        </p>
      </form>
    </main>
  );
}

export default ResetPasswordPage;