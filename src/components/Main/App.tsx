import React from 'react';

import BurgerConstructor from '../BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients';
import Header from '../Header';
import './App.css';

const App = () => {
  return (
    <div className="index text text_type_main-default">
      <Header/>
      <main className="main">
        <BurgerIngredients />
        <BurgerConstructor />
      </main>
    </div>
  );
}

export default App;
