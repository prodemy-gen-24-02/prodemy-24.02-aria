import React from 'react'
import { useState } from 'react'
import ProductDetail from 'src/components/ProductDetail';
//import { prod0 } from 'src/data/ListArray';
import {
    useParams,
  } from "react-router-dom";
  import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch';

function ProductPage() {
    let { paramId } = useParams();

    const {data:promoData , error:error0, isLoading:load0} = useSWR("http://localhost:3001/products_promo",axiosFetch);
    const {data:prod1Data , error:error1, isLoading:load1} = useSWR("http://localhost:3001/products_hp",axiosFetch);

    if (load1) return <h2>Loading...</h2>;
    return(

        <ProductDetail product={prod1Data.find(x => x.id === parseInt(paramId))} />

    );
}

export default ProductPage
