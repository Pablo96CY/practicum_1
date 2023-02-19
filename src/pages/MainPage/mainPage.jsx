import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import style from './style.module.css';
import BurgerConstructor from '../../components/BurgerConstructor/burgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/burgerIngredients';
import { ingredientsData } from '../../services/BurgerIngredients/actions';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientsData());
  }, [dispatch]);

  return (
    <main className={style.main}>
      <div className={style.body}>
        <BurgerIngredients/>
        <BurgerConstructor/>
      </div>
    </main>
  )
}

export default MainPage;