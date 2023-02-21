import React from "react";
import { Link } from "react-router-dom";
import { 
  Logo, 
  BurgerIcon, 
  ListIcon, 
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import localize from "../../utils/localize";
import { BASE_ROOT, COSTRUCTOR_ROOT, PROFILE_ROOT } from "../../utils/routes";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.block}>
        <div className={style.block_box}>
          <div className={style.block_item}>
            <BurgerIcon type="primary"/>
            <Link 
              className={style.link} 
              to={BASE_ROOT}
            >
              {localize.Constructor}
            </Link>
          </div>
          <div className={style.block_item}>
            <ListIcon type="primary" />
            <Link 
              className={style.link} 
              to={COSTRUCTOR_ROOT}
            >
              {localize.OrderList}
            </Link>
          </div>
        </div>
        <div className={`${style.block_item} ${style.block_box_logo}`}>
          <Link 
            className={style.link} 
            to={BASE_ROOT}
          >
            <Logo/>
          </Link>
        </div>
        <div className={style.block_item}>
          <ProfileIcon type="primary" />
          <Link 
            className={style.link} 
            to={PROFILE_ROOT}
            state={{
              from: PROFILE_ROOT
            }}
          >
            {localize.PersonalAccount}
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header