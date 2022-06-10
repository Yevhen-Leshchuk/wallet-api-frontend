import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Container from 'components/Container';
import s from './Layout.module.scss';

function Layout() {
  return (
    <div className={s.layout}>
      <Container>
        <Header />
        <Outlet />
      </Container>
    </div>
  );
}

export default Layout;
