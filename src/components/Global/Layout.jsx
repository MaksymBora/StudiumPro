import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
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
