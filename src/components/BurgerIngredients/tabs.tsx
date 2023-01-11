import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import "./style.css";
import localize from "../../localize";

const Tabs = () => {
  const [active, setActive] = React.useState('bun')
  return (
    <div className="tabs_container">
      <Tab 
        value="bun" 
        active={active === 'bun'} 
        onClick={setActive}
      >
        {localize.Buns}
      </Tab>
      <Tab 
        value="souce" 
        active={active === 'souce'} 
        onClick={setActive}
      >
        {localize.Sauces}
      </Tab>
      <Tab 
        value="ingredient" 
        active={active === 'ingredient'} 
        onClick={setActive}
      >
        {localize.Ingredients}
      </Tab>
    </div>
  )
}

export default Tabs