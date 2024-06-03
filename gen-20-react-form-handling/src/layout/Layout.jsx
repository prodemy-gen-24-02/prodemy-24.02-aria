import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";

function Layout({ children }) {
  if(useLocation().pathname=="/admin" || useLocation().pathname=="/adminform"){
    return (
      <>
      <HeaderAdmin />
        <div className="flex flex-col justify-center pt-2 min-h-screen">{children}</div>
        
      </>
    );
  }else
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center pt-2">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
