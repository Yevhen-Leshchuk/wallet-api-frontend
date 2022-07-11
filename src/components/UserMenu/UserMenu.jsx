import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { authSelectors } from 'redux/auth';
import Modal from 'common/elements/Modal';
import useravatar from '../../images/img/home-page/user.png';
import sprite from '../../images/svg/sprite.svg';
import s from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const name = useSelector(authSelectors.getUsername);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onClick = () => {
    dispatch(authOperations.logOut());
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
      {showModal && (
        <Modal
          onClose={toggleModal}
          onClick={onClick}
          text="Вы действительно хотите выйти?"
        />
      )}
    </div>
  );
};

export default UserMenu;
