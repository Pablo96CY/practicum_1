import React, { ReactNode, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import style from "./style.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { KeyBoard } from "../../utils/enum";

interface IProps {
  onClose: () => void,
  info?: string | undefined,
  children: ReactNode
}

const modal = document.getElementById('modal')!;

const Modal = ({ onClose, info, children }: IProps) => {

  const escapeClose = useCallback((event: KeyboardEvent) => {
    if (event.key === KeyBoard.ESCAPE) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.body.addEventListener(KeyBoard.KEYDOWN as any, escapeClose);

    return () => {
      document.body.removeEventListener(KeyBoard.KEYDOWN as any, escapeClose);
    };
  }, [escapeClose]);

  return ReactDOM.createPortal(
    <>
    <ModalOverlay onClose={onClose}/>
    <div className={style.modal_container}>
      <div className={style.modal_box}>
        <div className={style.modal_header}>
          {info && (
            <h1 className="text text_type_main-large">
              {info}
            </h1>
          )}
          <p className={style.close_btn} onClick={onClose}>
            <CloseIcon type="primary"/>
          </p>
        </div>
        {children}
      </div>
    </div>
  </>,
    modal
  );
}

export default Modal;