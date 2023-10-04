import React from 'react';
import Navbar from '../card/Navbar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
      <div className='container max-w-full'>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
