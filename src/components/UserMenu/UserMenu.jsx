import useravatar from '../../images/img/home-page/user.png';
import sprite from '../../images/svg/sprite.svg';
import s from './UserMenu.module.scss';

const UserMenu = () => {
  return (
    <div className={s.userBox}>
      <div className={s.userAvatarBox}>
        <img className={s.userImg} src={useravatar} alt="user-avatar" />
      </div>
      <p className={s.userName}>User name</p>
      <button type="button" className={s.logoutBtn}>
        <svg className={s.logoutImg} width="16" height="16">
          <use xlinkHref={`${sprite}#logout`} />
        </svg>
        <p className={s.logoutText}>Выйти</p>
      </button>
    </div>
  );
};

export default UserMenu;
