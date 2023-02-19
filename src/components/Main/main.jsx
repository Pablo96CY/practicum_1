import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ingredientsData } from '../../services/BurgerIngredients/actions';
import { INGREDIENT_INFO_MODAL_OPEN } from '../../services/IngredientsDetails/actions';
import Header from '../Header/header';
import RoutesComponent from '../Routes/routes';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientsData());
  }, [dispatch]);

  useEffect(() => {
    if(window.location.pathname.split('/')[1] === 'ingredients') {
      dispatch({
        type: INGREDIENT_INFO_MODAL_OPEN
      })
    }
  }, [dispatch])

  return (
    <div className="index text text_type_main-default">
      <Header/>
      <RoutesComponent/>
    </div>
  );
}

export default App;