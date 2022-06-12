// import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logoBox}></div>
      <UserMenu />
    </header>
  );
};

export default Header;
