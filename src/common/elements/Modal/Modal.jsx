import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import Button from '../Button';
import sprite from '../../../images/svg/sprite.svg';
import s from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, onClick, text }) {
  useEffect(() => {
    window.document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.document.body.style.overflowY = 'visible';
    };
  });

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button type="button" className={s.closeBtn} onClick={onClose}>
          <svg className={s.closeImg}>
            <use xlinkHref={`${sprite}#close`} />
          </svg>
        </button>
        <h2 className={s.title}>{text}</h2>

        <Button
          text="да"
          onClick={onClick}
          style={{
            marginRight: '15px',
            border: '2px solid #F6F7FC',
            boxShadow: 'none',
          }}
        />
        <Button
          text="нет"
          onClick={() => onClose()}
          style={{
            border: '2px solid #F6F7FC',
            boxShadow: 'none',
          }}
        />
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
