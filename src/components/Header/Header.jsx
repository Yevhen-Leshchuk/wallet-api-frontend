import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { authSelectors } from 'redux/auth';
import s from './Header.module.scss';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={s.header}>
      <Link to="/" alt="authPage" className={s.logoBox}></Link>
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Header;
