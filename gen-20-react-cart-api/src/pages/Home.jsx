import React from 'react'
import { useState, useEffect, useContext } from 'react'
import 'src/App.css'

import ProductCard from 'src/components/ProductCard'
import Productrow from 'src/components/ProductRow'
import banner1 from 'src/assets/images/img1.jpg'

import useSWR from 'swr'
import axiosFetch from 'src/components/AxiosFetch'
//import { CartContext } from 'src/components/CartContext'

import { connect, useDispatch, useSelector } from 'react-redux';
//import { updateCartItem } from 'src/store/action/cartAction'
import { addItem } from 'src/store/cartSlice'
import axios from 'axios'

function Home() {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);
  const { data: prodData, error: error0, isLoading: load0 } = useSWR("http://localhost:3001/products", axiosFetch, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });
  const { data: cartData, error: error1, isLoading: load1, mutate:mutateCart } = useSWR("http://localhost:3001/cart", axiosFetch, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  if (error0||error1) return <div>Failed to fetch data.</div>;
  if (load1) return <h2>Loading...</h2>;
  
  //console.log(prodData);
  //const prod1Data=prodData["products_hp"];
  //const prod2Data=prodData["products_pc"];
  //const prod3Data=prodData["products_acc"];

  //const { cartItems, addToCart } = useContext(CartContext);
  const handleAddToCart = (product) => {
    let cart = cartData;
    //console.log(cartData);
    const item = cart.find(it => it.id == product.id);
    const prevQuantity = item ? item.quantity : 0;
    //console.log(item);
    if(prevQuantity==0){
    axios.post("http://localhost:3001/cart", {
      id:product.id,
      product: product,
      quantity: prevQuantity + 1
    }).then(() => {
      dispatch(addItem({
        product: product,
        quantity: prevQuantity + 1
      }));
      mutateCart();
    })
      .catch((error) => {
        console.log("Error", error);
      });
    }
    else{
      axios.put(`http://localhost:3001/cart/${product.id}`,{
        product: product,
        quantity: prevQuantity + 1
      }).then(() => {
        dispatch(addItem({
          product: product,
          quantity: prevQuantity + 1
        }));
        mutateCart();
      })
      .catch((error) => {
        console.log("Error", error);
      });


    //console.log(cart);
  }
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
      <div className="container flex p-4 justify-center h-fit">
        <div className="flex flex-col lg:flex-wrap lg:flex-row justify-center place-content-center">
          {prodData.map(product => {
            //console.log(product);
            if (product.discount > 0) {
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
      </div>


      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">RECOMMENDED</div>
        <div className="flex flex-col flex-wrap md:flex-row border-t border-solid border-gray-300 my-4 justify-center">
          {prodData.map(product => {
            //console.log(product);
            if (product.category == "Smartphone") {
              return (

                <ProductCard
                  product={product}
                  addItem={handleAddToCart}
                />

              );
            }
          })}
        </div>
        <div className="text-left w-full text-2xl">NEW PRODUCTS</div>
        <div className="flex flex-col flex-wrap md:flex-row border-t border-solid border-gray-300 my-4 justify-center">
          {prodData.map(product => {
            //console.log(product);
            if (product.category == "Computer") {
              return (

                <ProductCard
                  product={product}
                  addItem={handleAddToCart}
                />

              );
            }
          })}
        </div>


        <div className="text-left w-full text-2xl">BEST SELLING</div>
        <div className="flex flex-col flex-wrap md:flex-row border-t border-solid border-gray-300 my-4 justify-center">
          {prodData.map(product => {
            //console.log(product);
            if (product.category == "Accessories") {
              return (

                <ProductCard
                  product={product}
                  addItem={handleAddToCart}
                />

              );
            }
          })}
        </div>
      </div>

    </>
  );
};

const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  { addItem }
)(Home);
//export default Home;