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
//import { updateCartItem,updateCartItemQuantity,clearCart,getCartTotal } from 'src/store/action/cartAction'
import { connect } from 'react-redux';
import { addItem, updateItem } from 'src/store/cartSlice';

function ProductPage({cart,addItem}) {
    let { paramId } = useParams();
    //const { cartItems, addToCart } = useContext(CartContext); 
    //const {data:promoData , error:error0, isLoading:load0} = useSWR("http://localhost:3001/products_promo",axiosFetch);
    const {data:prod1Data , error:error1, isLoading:load1} = useSWR("http://localhost:3001/products/",axiosFetch);
    if (load1) return <h2>Loading...</h2>;
    //const [dataState, setDataState] = useState([]);
    console.log(cart);
    let data=prod1Data.find(x => x.id === parseInt(paramId));

    const handleAddToCart = (product,qty) => {
    
      const item = cart.items.find(it => it.product.id == product.id);
      const prevQuantity = item ? item.quantity : 0;
      //console.log(product);
      addItem({
          product,
          quantity: prevQuantity + qty
      });
      console.log(cart);
  }


    return(
<>
        
        <ProductDetail product={data}   
        addToCart={handleAddToCart}
        />
        </>
//return(<>{console.log(prod1Data)}</>
    );
}
const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(
  mapStateToProps,
  {addItem}
) (ProductPage)
