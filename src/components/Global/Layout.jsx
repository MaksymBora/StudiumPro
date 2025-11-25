import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header';

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <main>
        {/* <Suspense fallback={<Loader />}> */}
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
