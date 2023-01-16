import React, { useEffect, useState } from 'react';
import { INGREDIENTS_DATA_API_URL } from '../../utils/const';
import localize from '../../utils/localize';

import BurgerConstructor from '../BurgerConstructor/burgerConstructor';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import Header from '../Header/header';
import style from "./style.module.css";

const getIngredientsMainData = async() => {
  const result = await fetch(`${INGREDIENTS_DATA_API_URL}/ingredients`);
  if (!result.ok) {
    const message = `${localize.Error} ${result.status}`;
    throw new Error(message);
  } else return result.json();
};

const App = () => {
  const [mainData, setMainData] = useState({
    data: undefined, 
    success: true, 
    error: false 
  });

  useEffect(() => {
    getIngredientsMainData().then((data) => {
      setMainData({ data: data, success: true, error: false });
    }).catch((err) => {
      setMainData({ data: undefined, success: false, error: true });
    });
  }, []);

  return (
    <div className="index text text_type_main-default">
      {mainData.data ? (
        <>
          <Header/>
          <main className={style.main}>
            <BurgerIngredients data={mainData.data}/>
            <BurgerConstructor data={mainData.data}/>
          </main>
        </>
      ) : ( <text>{localize.Error}</text> )}
    </div>
  );
}

export default App;
