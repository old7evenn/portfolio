import { Outlet } from 'react-router-dom';

import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
