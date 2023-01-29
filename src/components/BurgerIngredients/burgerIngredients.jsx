import React, { useMemo } from "react";
import { useSelector } from 'react-redux';

import style from "./style.module.css";
import Card from "../BurgerCard/burgerCard";
import Tabs from "../Tabs/tabs";
import localize from "../../utils/localize";
import { Ingredients } from "../../utils/enum";

const BurgerIngredients = () => {
  const data  = useSelector((state) => state.burgerIngredients);

  const buns = useMemo(() => {
    return data.data.filter(item => item.type === Ingredients.bun);
  }, [data]);

  const sauces = useMemo(() => {
    return data.data.filter(item => item.type === Ingredients.sauce);
  }, [data]);
  
  const mains = useMemo(() => {
    return data.data.filter(item => item.type === Ingredients.main);
  }, [data]);

  return (
    <section className={style.ingredients_container}>
      <div className={style.titles}>
        <h1 className="text text_type_main-large">{localize.CreateBurger}</h1>
      </div>
      <Tabs/>
      <div className={style.ingredients_scroll}>
        <div className={style.titles}>
          <h1 className="text text_type_main-medium">{localize.Buns}</h1>
        </div>
        <div className={style.ingredients_box}>
          {buns.map(bun => (
            <Card key={bun._id} data={bun}/>
          ))}
        </div>
        <div className={style.titles}>
          <h1 className="text text_type_main-medium">{localize.Sauces}</h1>
        </div>
        <div className={style.ingredients_box}>
          {sauces.map(sauce => (
            <Card key={sauce._id} data={sauce}/>
          ))}
        </div>
        <div className={style.titles}>
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