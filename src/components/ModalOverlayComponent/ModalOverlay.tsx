import React from "react";

import style from "./style.module.css";

interface IProps {
  onClose: () => void,
  isBlackBackground?: boolean
}

const ModalOverlay = ({ onClose, isBlackBackground }: IProps) => {
  return ( 
    <div className={isBlackBackground ? style.special_overlay : style.overlay} onClick={onClose}/> 
  );
}

export default ModalOverlay;