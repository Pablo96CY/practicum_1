import React from "react";
import { 
  Logo, 
  BurgerIcon, 
  ListIcon, 
  ProfileIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

import "./style.css";
import localize from "../../localize";

const Header = () => {
  return (
    <header className="header">
      <nav className="block">
        <div className="block_box">
          <div className="block_item">
            <BurgerIcon type="primary"/>
            <a className="link" href="#">{localize.Constructor}</a>
          </div>
          <div className="block_item">
            <ListIcon type="primary" />
            <a className="link" href="#">{localize.OrderList}</a>
          </div>
        </div>
        <div className="block_box block_box_logo">
          <Logo/>
        </div>
        <div className="block_item">
          <div className="block_item">
            <ProfileIcon type="primary" />
            <a className="link" href="#">{localize.PersonalAccount}</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header