import React from 'react';
import Header from '../components/Header';
import '../styles/global.css';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
      <html>
        <head>
          < title> Girls Beaty Store</title>
        </head>
       <body style={{ overflowX: 'hidden' }}>
            <Header />
            <main>{children}</main>
        </body>
      </html>
  );
};

export default Layout;
