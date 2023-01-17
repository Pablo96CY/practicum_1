import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import localize from "../../utils/localize";
import { Ingredients } from "../../utils/enum";

const Tabs = () => {
  const [active, setActive] = React.useState(Ingredients.bun)
  return (
    <div className={style.tabs_container}>
      <Tab 
        value={Ingredients.bun} 
        active={active === Ingredients.bun} 
        onClick={setActive}
      >
        {localize.Buns}
      </Tab>
      <Tab 
        value={Ingredients.sauce} 
        active={active === Ingredients.sauce} 
        onClick={setActive}
      >
        {localize.Sauces}
      </Tab>
      <Tab 
        value={Ingredients.main}
        active={active === Ingredients.main} 
        onClick={setActive}
      >
        {localize.Ingredients}
      </Tab>
    </div>
  )
}

export default Tabs