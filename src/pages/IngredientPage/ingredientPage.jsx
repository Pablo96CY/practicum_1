import React from 'react';

import IngredientDetails from '../../components/IngredientDetails/ingredientDetails';
import commonStyle from "../../utils/commonPageStyles.module.css";

const IngredientPage = () => {
  return (
    <main className={commonStyle.pages_form_container}>
      <div className={commonStyle.pages_container_inner}>
        <IngredientDetails/>
      </div>
    </main>
  );
}

export default IngredientPage;