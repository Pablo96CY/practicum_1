import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { LOGIN_ROOT } from '../../utils/routes';
import commonStyle from "../../utils/commonPageStyles.module.css";
import localize from '../../utils/localize';
import { logoutAction } from '../../services/Authorization/actions';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useSelector(store => store.authReducer);

  useEffect(() => {
    dispatch(logoutAction());
  }, [dispatch]);

  useEffect(() => {
    if(!isLogged) {
      navigate(LOGIN_ROOT, { replace: true });
    }
  }, [isLogged, navigate]);


  return (
    <main className={commonStyle.pages_form_container}>
      <form className={commonStyle.pages_container_inner}>
        <h1 className={`${commonStyle.pages_form_h1} text text_type_main-medium`}>
          {localize.Exit}
        </h1>
      </form>
    </main>
  );
}

export default LogoutPage;