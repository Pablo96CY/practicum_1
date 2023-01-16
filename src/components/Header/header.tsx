import React from "react";
import { 
  Logo, 
  BurgerIcon, 
  ListIcon, 
  ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import localize from "../../utils/localize";

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={style.block}>
        <div className={style.block_box}>
          <div className={style.block_item}>
            <BurgerIcon type="primary"/>
            <a className={style.link} href="#">{localize.Constructor}</a>
          </div>
          <div className={style.block_item}>
            <ListIcon type="primary" />
            <a className={style.link} href="#">{localize.OrderList}</a>
          </div>
        </div>
        <div className={`${style.block_item} ${style.block_box_logo}`}>
          <Logo/>
        </div>
        <div className={style.block_item}>
          <ProfileIcon type="primary" />
          <a className={style.link} href="#">{localize.PersonalAccount}</a>
        </div>
      </nav>
    </header>
  )
}

export default Header