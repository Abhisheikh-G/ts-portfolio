import React from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Box from '@mui/material/Box';

type LayoutProps = React.PropsWithChildren<{
  children: any;
}>;

const Layout: React.FC<LayoutProps> = function ({ children }) {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: '100vh', mt: '9em' }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
