import React from 'react';

import style from './style.module.css';
import BurgerConstructor from '../../components/BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../../components/BurgerIngredients/BurgerIngredients';

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