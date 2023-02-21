import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router';

import { ingredientsData } from '../../services/BurgerIngredients/actions';
import { INGREDIENT_INFO_MODAL_CLOSE, INGREDIENT_INFO_MODAL_OPEN } from '../../services/IngredientsDetails/actions';
import Header from '../Header/Header';
import RoutesComponent from '../Routes/Routes';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(ingredientsData());
  }, [dispatch]);

  useEffect(() => {
    if(window.location.pathname.split('/')[1] === 'ingredients') {
      dispatch({
        type: INGREDIENT_INFO_MODAL_OPEN
      })
    } else {
      dispatch({
        type: INGREDIENT_INFO_MODAL_CLOSE
      })
    }
  }, [dispatch, location])

  return (
    <div className="index text text_type_main-default">
      <Header/>
      <RoutesComponent/>
    </div>
  );
}

export default App;