import React from 'react';
import { Outlet } from 'react-router';
import { NavLink } from 'react-router-dom';

import { 
  LOGOUT_ROOT, 
  ORDERS_ROOT 
} from '../../../utils/routes';
import commonStyle from "../../../utils/commonPageStyles.module.css";
import localize from '../../../utils/localize';

const ProfileMainPage = () => {
  return (
    <main className={`${commonStyle.pages_form_container} ${commonStyle.pages_form_container_profile}`}>
      <div className={commonStyle.pages_form_container_profile_inner}>
        <nav className={commonStyle.pages_form_container_profile_tabs}>
          <ul className={commonStyle.pages_form_container_profile_tabs_ul}>
            <li>
              <NavLink to="" end>
                <span className={`text text_type_main-medium text_color_primary`}>
                  {localize.Profile}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={ORDERS_ROOT}>
                <span className={`text text_type_main-medium text_color_inactive`}>
                  {localize.OrdersHistory}
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to={LOGOUT_ROOT}>
                <span className={`text text_type_main-medium text_color_inactive`}>
                  {localize.Exit}
                </span>
              </NavLink>
            </li>
          </ul>
          <p className={`${commonStyle.pages_form_container_profile_tabs_text} text text_type_main-default`}>
            {localize.ChangePersonalDataInfo}
          </p>
        </nav>
        <Outlet/>
      </div>
    </main>
  );
}

export default ProfileMainPage;