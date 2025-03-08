import React from 'react';
import Header from '../components/Header';
import '../styles/global.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <div>
        <Header />
        <main>{children}</main>
      </div>
  );
};

export default Layout;
