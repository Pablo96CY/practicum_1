import React from 'react';

import commonStyle from "../../utils/commonPageStyles.module.css";
import localize from "../../utils/localize";

const OthersPage = () => {
  return (
    <div className={commonStyle.pages_form_container}>
      <p className={`${commonStyle.pages_container_inner} text text_type_main-medium`}>
        {localize.PageNotFound}
      </p>
    </div>
  );
}

export default OthersPage;