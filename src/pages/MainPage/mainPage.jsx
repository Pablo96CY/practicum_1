import React from 'react';

import style from './style.module.css';
import BurgerConstructor from '../../components/BurgerConstructor/burgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/burgerIngredients';

const MainPage = () => {
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