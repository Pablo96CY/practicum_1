import React from "react";

import style from "./style.module.css";

interface IProps {
  onClose: () => void,
}

const ModalOverlay = ({ onClose }: IProps) => {
  return ( 
    <div className={style.overlay} onClick={onClose}/> 
  );
}

export default ModalOverlay;