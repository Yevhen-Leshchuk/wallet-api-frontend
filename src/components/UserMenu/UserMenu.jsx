import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import useravatar from '../../images/img/home-page/user.png';
import sprite from '../../images/svg/sprite.svg';
import s from './UserMenu.module.scss';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.userBox}>
      <div className={s.userAvatarBox}>
        <img className={s.userImg} src={useravatar} alt="user-avatar" />
      </div>
      <p className={s.userName}>{name}</p>
      <button
        type="button"
        className={s.logoutBtn}
        onClick={() => dispatch(authOperations.logOut())}
      >
        <svg className={s.logoutImg}>
          <use xlinkHref={`${sprite}#logout`} />
        </svg>
        <p className={s.logoutText}>Выйти</p>
      </button>
    </div>
  );
};

export default UserMenu;
