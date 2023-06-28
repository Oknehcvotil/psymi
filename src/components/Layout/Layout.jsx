import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Head from 'components/Head';
import { Container } from './Layout.styled';
import Aside from 'components/Aside';

const Layout = () => {
  return (
    <>
      <Head />
      <Container>
        <main>
          <Suspense fallback={'loading...'}>
            <Outlet />
          </Suspense>
        </main>
        <Aside />
      </Container>
      <footer></footer>
    </>
  );
};

export default Layout;
