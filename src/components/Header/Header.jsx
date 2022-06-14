import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <Link to="/" alt="authPage" className={s.logoBox}></Link>
      <UserMenu />
    </header>
  );
};

export default Header;
