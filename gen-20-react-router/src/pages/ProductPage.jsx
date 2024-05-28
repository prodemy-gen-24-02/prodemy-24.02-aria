import React from 'react'
import { useState } from 'react'
import ProductDetail from 'src/components/ProductDetail';
import { prod0 } from 'src/data/ListArray';
import {
    Link,
    Navigate,
    Route,
    RouterProvider,
    Routes,
    createBrowserRouter,
    useParams,
  } from "react-router-dom";

function ProductPage() {
    let { paramId } = useParams();
    return(

        <ProductDetail product={prod0.find(x => x.id === parseInt(paramId))} />

    );
}

export default ProductPage
