import React, { useEffect, useState } from 'react';

import localize from '../../utils/localize';
import getIngredientsMainData from '../../utils/methods';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import Header from '../Header/header';
import style from "./style.module.css";

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
