import React from 'react';
import { Component } from 'react';
import { useState, useEffect } from "react";
import './App.css';
import {
  Link,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  useParams,
} from "react-router-dom";

import Home from './pages/Home';

import About from './pages/About';
import Contact from './pages/Contact';

import Layout from './layout/Layout';
//import { prod0 } from 'src/data/ListArray';
import ProductDetail from './components/ProductDetail';
import ProductPage from './pages/ProductPage';
import AdminPage from './pages/AdminPage';
import AdminForm from './components/AdminForm';
import AdminFormUpdate from './components/AdminFormUpdate';
/*function ProductPage() {
  let { paramId } = useParams();
  return(

      <ProductDetail product={prod0.find(x => x.id == paramId)} />

  );
};*/


function App() {


  //return (
  //<AdminPage />
  //);
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:paramId" element={<ProductPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/adminform" element={<AdminForm />} />
          <Route path="/adminupdate/:paramId" element={<AdminFormUpdate />} />
        </Routes>
      </Layout>

    </>
  );

};

export default App;

