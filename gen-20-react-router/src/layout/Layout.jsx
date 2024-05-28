import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center pt-2">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
