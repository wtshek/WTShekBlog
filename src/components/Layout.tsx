import React, { FC, ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <main className="font-sans bg-primary">
        <Header />
        {children}
      </main>
      <Footer className="font-sans" />
    </>
  );
};

export default Layout;
