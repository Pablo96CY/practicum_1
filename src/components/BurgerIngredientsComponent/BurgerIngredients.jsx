import React, { useState, useMemo, useRef } from "react";
import { useSelector } from 'react-redux';
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import Card from "../BurgerCardComponent/BurgerCard";
import localize from "../../utils/localize";
import { Ingredients } from "../../utils/enum";

const BurgerIngredients = () => {
  const data = useSelector(store => store.burgerIngredients);

  const { items, bun } = useSelector(store => store.burgerConstructor);

  const [activeTab, setActiveTab] = useState(Ingredients.bun);

  const bunTab = useRef(null);

  const sauceTab = useRef(null);

  const mainTab = useRef(null);

  const allBuns = useMemo(() => {
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

  const counterIngredients = useMemo(() => {
    const count = {};

    items.map(item => {
      if (!(item._id in count)) {
        count[item._id] = 0;
      }
      count[item._id] = count[item._id] + 1;
    })

    return count;
  }, [items]);

  const counterBuns = useMemo(() => {
    const count = {};
    if(bun) {
      count[bun._id] = 2;
    }
    return count;
  }, [bun]);

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
          {allBuns.map(bun => (
            <Card key={bun._id} data={bun} numberOfItems={counterBuns[bun._id]}/>
          ))}
        </div>
        <div className={style.titles} ref={sauceTab}>
          <h1 className="text text_type_main-medium">{localize.Sauces}</h1>
        </div>
        <div className={style.ingredients_box}>
          {sauces.map(sauce => (
            <Card key={sauce._id} data={sauce} numberOfItems={counterIngredients[sauce._id]}/>
          ))}
        </div>
        <div className={style.titles} ref={mainTab}>
          <h1 className="text text_type_main-medium">{localize.Ingredients}</h1>
        </div>
        <div className={style.ingredients_box}>
          {mains.map(main => (
            <Card key={main._id} data={main} numberOfItems={counterIngredients[main._id]}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients