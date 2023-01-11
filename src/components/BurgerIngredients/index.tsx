import React from "react";

import "./style.css";
import Card from "./card";
import data from "../../data";
import Tabs from "./tabs";
import localize from "../../localize";

const BurgerIngredients = () => {
  return (
    <section className="ingredients_container">
      <div className="titles">
        <h1 className="text text_type_main-large">{localize.CreateBurger}</h1>
      </div>
      <Tabs/>
      <div className="ingredients_scroll">
        <div className="titles">
          <h1 className="text text_type_main-medium">{localize.Buns}</h1>
        </div>
        <div className="ingredients_box">
          {data.filter(item => item.type === "bun").map(bun => (
            <Card key={bun._id} data={bun}/>
          ))}
        </div>
        <div className="titles">
          <h1 className="text text_type_main-medium ">{localize.Sauces}</h1>
        </div>
        <div className="ingredients_box">
          {data.filter(item => item.type === "sauce").map(sauce => (
            <Card key={sauce._id} data={sauce}/>
          ))}
        </div>
        <div className="titles">
          <h1 className="text text_type_main-medium">{localize.Ingredients}</h1>
        </div>
        <div className="ingredients_box">
          {data.filter(item => item.type === "main").map(main => (
            <Card key={main._id} data={main}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BurgerIngredients