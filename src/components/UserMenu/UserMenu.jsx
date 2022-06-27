import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Modal from 'common/elements/Modal';
import useravatar from '../../images/img/home-page/user.png';
import sprite from '../../images/svg/sprite.svg';
import s from './UserMenu.module.scss';

const UserMenu = () => {
  const [showModal, setShowModal] = useState(false);

  const name = useSelector(authSelectors.getUsername);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={s.userBox}>
      <div className={s.userAvatarBox}>
        <img className={s.userImg} src={useravatar} alt="user-avatar" />
      </div>
      <p className={s.userName}>{name}</p>
      <button type="button" className={s.logoutBtn} onClick={toggleModal}>
        <svg className={s.logoutImg}>
          <use xlinkHref={`${sprite}#logout`} />
        </svg>
        <p className={s.logoutText}>Выйти</p>
      </button>
      {showModal && <Modal onClose={toggleModal} />}
    </div>
  );
};

export default UserMenu;
