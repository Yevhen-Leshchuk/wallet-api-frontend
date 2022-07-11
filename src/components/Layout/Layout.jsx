import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Container from 'components/Container';

function Layout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default Layout;
