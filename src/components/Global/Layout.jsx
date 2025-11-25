import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header';
import { TopBar } from './Topbar';

export const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <TopBar />
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
