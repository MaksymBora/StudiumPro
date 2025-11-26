import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import HeaderElectro from './header/HeaderElectro';

export const Layout = () => {
  return (
    <>

      <HeaderElectro />

      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer></Footer>
    </>
  );
};
