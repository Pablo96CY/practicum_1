import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Input, 
  EmailInput, 
  PasswordInput, 
  Button 
} from "@ya.praktikum/react-developer-burger-ui-components";

import { LOGIN_ROOT, PROFILE_ROOT } from '../../utils/routes';
import commonStyle from "../../utils/commonPageStyles.module.css";
import localize from '../../utils/localize';
import { CLEAR_REGISTRATION, registrationAction } from '../../services/Registration/actions';
import { CLEAR_USER_DATA, getUserDataAction } from '../../services/UserData/actions';
import { CLEAR_AUTH } from '../../services/Authorization/actions';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  const { user } = useSelector(store => store.userReducer);

  const { successRegistration, errorRegistration } = useSelector(store => store.registReducer);

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
    if(successRegistration) {
      dispatch({
        type: CLEAR_REGISTRATION
      });
      navigate(LOGIN_ROOT, { replace: true });
    }
    if(errorRegistration) {
      alert(localize.RegistrationError);
    }
  }, [
    successRegistration, 
    errorRegistration,
    dispatch
  ]);

  const applyForm = (e) => {
    const form = {
      name: name,
      email: email,
      password: password
    }
    e.preventDefault();
    dispatch(
      registrationAction(form)
    );
  };

  return (
    <main className={commonStyle.pages_form_container}>
      <form className={commonStyle.pages_container_inner} onSubmit={applyForm}>
        <h1 className={`${commonStyle.pages_form_h1} text text_type_main-medium`}>
          {localize.Registration}
        </h1>
        <Input 
          placeholder={localize.Name} 
          extraClass={commonStyle.pages_form_p_email_password}
          name="name" 
          value={name} 
          onChange={(el) => { 
            setName(el.target.value);
          }} 
        />
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
          {localize.MakeRegistration}
        </Button>
        <p className={`${commonStyle.pages_form_h1} "text text_type_main-default text_color_inactive`}>
          {localize.HaveRegistration} 
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

export default RegistrationPage;