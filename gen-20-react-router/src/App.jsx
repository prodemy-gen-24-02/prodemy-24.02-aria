import React from 'react';
import { useState } from 'react';
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
import { prod0 } from 'src/data/ListArray';
import ProductDetail from './components/ProductDetail';
import ProductPage from './pages/ProductPage';

/*function ProductPage() {
  let { paramId } = useParams();
  return(

      <ProductDetail product={prod0.find(x => x.id == paramId)} />

  );
};*/

function App() {


  return (
    <>
      <Layout>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:paramId" element={<ProductPage />} />
        </Routes>
      </Layout>

    </>
  );

  /*return (
    <>
      
      <h1>Product List</h1>

      <div className="card flex justify-center content-center items-center">
        <ProductList products={products} />

      </div>

    </>
  );*/
};

export default App;

