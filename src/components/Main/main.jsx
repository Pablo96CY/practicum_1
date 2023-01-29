import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ingredientsData } from '../../services/BurgerIngredients/actions';
import BurgerConstructor from '../BurgerConstructor/burgerConstructor';
import BurgerIngredients from '../BurgerIngredients/burgerIngredients';
import Header from '../Header/header';
import style from "./style.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(ingredientsData());
  }, [dispatch]);



  return (
    <div className="index text text_type_main-default">
      <Header/>
      <main className={style.main}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </main>
    </div>
  );
}

export default App;