import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from '../index';
import { authRoutes, publicRoutes } from '../routes';
// import { SHOP_ROUTE } from '../utils/constants';
import NavBar from './NavBar';

const AppRouter: React.FC = () => {
  const { user } = useContext(Context);

  return (
    <>
      <NavBar />
      <Routes>
        {user.isAuth && authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={Component} />)}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
      {/* <Navigate to={SHOP_ROUTE} /> */}
    </>
  );
};

export default AppRouter;
