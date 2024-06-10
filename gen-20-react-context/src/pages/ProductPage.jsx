import React from 'react'
import { useState, useContext,useEffect } from 'react'
import ProductDetail from 'src/components/ProductDetail';
//import { prod0 } from 'src/data/ListArray';
import {
    useParams,
  } from "react-router-dom";
  import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch';
import axios from 'axios';
import { CartContext } from 'src/components/CartContext';

function ProductPage() {
    let { paramId } = useParams();
    const { cartItems, addToCart } = useContext(CartContext); 
    //const {data:promoData , error:error0, isLoading:load0} = useSWR("http://localhost:3001/products_promo",axiosFetch);
    const {data:prod1Data , error:error1, isLoading:load1} = useSWR("http://localhost:3001/products_hp",axiosFetch);
    if (load1) return <h2>Loading...</h2>;
    //const [dataState, setDataState] = useState([]);

    let data=prod1Data.find(x => x.id === parseInt(paramId));
    //setDataState(data);
    //useEffect(()=>{
      //let data=prod1Data.find(x => x.id === parseInt(paramId));
      //setDataState(data);
        //axios.get('http://localhost:3001/products_hp').then((response)=>{
      
      //console.log(dataState);
      //}).catch((error)=>{console.log(error);});
    //},[]);


    return(
<>
        
        <ProductDetail product={data}   
        addToCart={addToCart}
        />
        </>
//return(<>{console.log(prod1Data)}</>
    );
}

export default ProductPage
