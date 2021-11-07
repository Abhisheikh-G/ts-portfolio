import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Box from "@mui/material/Box";
import React from "react";

type LayoutProps = React.PropsWithChildren<{
  children: any;
}>;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box sx={{ minHeight: "100vh", mt: "9em" }}>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
