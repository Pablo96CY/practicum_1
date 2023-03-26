import React, { FormEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { EmailInput, PasswordInput, Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";

import commonStyle from "../../../utils/commonPageStyles.module.css";
import localize from '../../../utils/localize';
import { LOGIN_ROOT } from '../../../utils/routes';
import { patchUserDataAction } from '../../../services/UserData/actions';
import { TRootState } from '../../../utils/types';
import { IUser } from '../../../utils/interfaces';

const ProfileEditPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user }: IUser = useSelector((store: TRootState) => store.userReducer);

  const [ name, setName ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');

  useEffect(() => {
    if(!localStorage.getItem('refreshToken')) {
      navigate(LOGIN_ROOT, { replace: true });
    }
  });

  useEffect(() => {
    if(user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const canselForm = () => {
    setName(user.name);
    setPassword('');
    setEmail(user.email);
  };

  const submitForm = (e: FormEvent) => {
    const form = {
      name: name,
      email: email,
      password: password
    }
    e.preventDefault();
    dispatch<any>(patchUserDataAction(form));
    alert(localize.SuccessDataSave);
  };

  return (
    <form className={commonStyle.pages_form_container_proile_edit} onSubmit={submitForm}>
      <Input 
        extraClass={commonStyle.pages_form_p_email_password}
        placeholder={localize.Name}
        name="name" 
        icon="EditIcon"
        value={name} 
        onChange={(el) => {
          setName(el.target.value)
        }}
      />
      <EmailInput 
        extraClass={commonStyle.pages_form_p_email_password}  
        name="email"
        isIcon
        value={email} 
        onChange={(el) => {
          setEmail(el.target.value)
        }}
      />
      <PasswordInput 
        extraClass={commonStyle.pages_form_p_email_password} 
        name="password" 
        icon="EditIcon"
        value={password} 
        onChange={(el) => {
          setPassword(el.target.value)
        }}
      />
      <Button 
        type="primary" 
        extraClass={`${commonStyle.pages_form_button} ${commonStyle.pages_form_button_save}`}
        htmlType="submit"
        onClick={submitForm}
      >
        {localize.Save}
      </Button>
      <Button 
        type="primary" 
        extraClass={commonStyle.pages_form_button}
        htmlType="button"
        onClick={canselForm}
      >
        {localize.Canсel}
      </Button>
    </form>
  );
}

export default ProfileEditPage;