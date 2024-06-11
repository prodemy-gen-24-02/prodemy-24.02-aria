import React from 'react'
import { useState, useEffect, useContext } from 'react'
import 'src/App.css'

import ProductCard from 'src/components/ProductCard'
import Productrow from 'src/components/ProductRow'
import banner1 from 'src/assets/images/img1.jpg'
//import { promos } from 'src/data/ListArray'
//import { prod0 } from 'src/data/ListArray'
//import { prod1 } from 'src/data/ListArray'
//import { prod2 } from 'src/data/ListArray'
import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch'
//import { CartContext } from 'src/components/CartContext'

import {connect} from 'react-redux';
import { updateCartItem } from 'src/store/action/cartAction'

function Home({cart,updateCartItem}) {

  const {data:prodData , error:error0, isLoading:load0} = useSWR("http://localhost:3001/products",axiosFetch,    {
    revalidateOnFocus: false,
    revalidateIfStale: false,
});

  //const {data:prod1Data , error:error1, isLoading:load1} = useSWR("http://localhost:3001/products_hp",axiosFetch);
  //const {data:prod2Data , error:error2, isLoading:load2} = useSWR("http://localhost:3001/products_pc",axiosFetch);
  //const {data:prod3Data , error:error3, isLoading:load3} = useSWR("http://localhost:3001/products_acc",axiosFetch);
  
  if (error0) return <div>Failed to fetch data.</div>;
  if (load0) return <h2>Loading...</h2>;

  //console.log(prodData);
  const prod1Data=prodData["products_hp"];
  const prod2Data=prodData["products_pc"];
  const prod3Data=prodData["products_acc"];

  //const { cartItems, addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    
    const item = cart.items.find(it => it.product.id == product.id);
    const prevQuantity = item ? item.quantity : 0;
    //console.log(product);
    updateCartItem({
        product,
        quantity: prevQuantity + 1
    });
    //console.log(cart);
}


  return (
    <>

      <div className="relative w-full">
        <a class="prev-button left-0 rounded-r-lg">❮</a>
        <div className="w-full my-4">
          <img src={banner1} />
        </div>
        <a class="next-button right-0 rounded-l-lg">❯</a>
      </div>
      <div>
        <h1 class="sub-title text-center">SPECIAL OFFER</h1>
        
      </div>
      <div className="container flex flex-col lg:flex-wrap lg:flex-row p-4 justify-center h-fit">
        {prod1Data.map(product => {
          //console.log(product);
          if(product.discount>0){
          return (
          <ProductCard
            product={product}
            addItem={handleAddToCart}
          />
        );
      }
    }
      )}
    
      </div>
    

      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">RECOMMENDED</div>
        <Productrow
          products={prod1Data}
          addItem={handleAddToCart}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">NEW PRODUCTS</div>
        <Productrow
          products={prod2Data}
          addItem={handleAddToCart}
        />
      </div>

      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">BEST SELLING</div>
        <Productrow
          products={prod3Data}
          addItem={handleAddToCart}
        />
      </div>

    </>
  );
};
   
  const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    {updateCartItem}
)(Home);
//export default Home;