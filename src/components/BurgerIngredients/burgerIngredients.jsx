import React, { useState, useMemo, useRef } from "react";
import { useSelector } from 'react-redux';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import Card from "../BurgerCard/burgerCard";
import localize from "../../utils/localize";
import { Ingredients } from "../../utils/enum";

const BurgerIngredients = () => {
  const data  = useSelector((state) => state.burgerIngredients);

  const [activeTab, setActiveTab] = useState(Ingredients.bun);

  const bunTab = useRef(null);

  const sauceTab = useRef(null);

  const mainTab = useRef(null);

  const buns = useMemo(() => {
    return data.data.filter(item => item.type === Ingredients.bun);
  }, [data]);

  const sauces = useMemo(() => {
    return data.data.filter(item => item.type === Ingredients.sauce);
  }, [data]);
  
  const mains = useMemo(() => {
    return data.data.filter(item => item.type === Ingredients.main);
  }, [data]);  

  const scrollOnBunTabClick = () => {
    bunTab.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollOnSauceTabClick = () => {
    sauceTab.current.scrollIntoView({ behavior: "smooth" });
  }

  const scrollOnMainTabClick = () => {
    mainTab.current.scrollIntoView({ behavior: "smooth" });
  }

  const onScroll = (event) => {
    if (event.target.scrollTop <= 270) {
      setActiveTab(Ingredients.bun);
    }
    if (event.target.scrollTop > 270 && event.target.scrollTop <= 790) {
      setActiveTab(Ingredients.sauce);
    }
    if (event.target.scrollTop > 790){
      setActiveTab(Ingredients.main);
    }
  }

  return (
    <section className={style.ingredients_container}>
      <div className={style.titles}>
        <h1 className="text text_type_main-large">{localize.CreateBurger}</h1>
      </div>
      <div className={style.tabs_container}>
        <Tab 
          value={Ingredients.bun} 
          active={activeTab === Ingredients.bun} 
          onClick={() => { 
            setActiveTab(Ingredients.bun);
            scrollOnBunTabClick();
          }}
        >
          {localize.Buns}
        </Tab>
        <Tab 
          value={Ingredients.sauce} 
          active={activeTab === Ingredients.sauce}
          onClick={() => { 
            setActiveTab(Ingredients.sauce);
            scrollOnSauceTabClick();
          }}
        >
          {localize.Sauces}
        </Tab>
        <Tab 
          value={Ingredients.main}
          active={activeTab === Ingredients.main} 
          onClick={() => { 
            setActiveTab(Ingredients.main);
            scrollOnMainTabClick();
          }}
        >
          {localize.Ingredients}
        </Tab>
      </div>
      <div className={style.ingredients_scroll} onScroll={onScroll}>
        <div className={style.titles} ref={bunTab}>
          <h1 className="text text_type_main-medium">{localize.Buns}</h1>
        </div>
        <div className={style.ingredients_box}>
          {buns.map(bun => (
            <Card key={bun._id} data={bun}/>
          ))}
        </div>
        <div className={style.titles} ref={sauceTab}>
          <h1 className="text text_type_main-medium">{localize.Sauces}</h1>
        </div>
        <div className={style.ingredients_box}>
          {sauces.map(sauce => (
            <Card key={sauce._id} data={sauce}/>
          ))}
        </div>
        <div className={style.titles} ref={mainTab}>
          <h1 className="text text_type_main-medium">{localize.Ingredients}</h1>
        </div>
        <div className={style.ingredients_box}>
          {mains.map(main => (
            <Card key={main._id} data={main}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients