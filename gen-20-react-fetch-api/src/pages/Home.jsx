import React from 'react'
import { useState, useEffect } from 'react'
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

function Home() {

  const {data:promoData , error:error0, isLoading:load0} = useSWR("http://localhost:3001/products_promo",axiosFetch);
  const {data:prod1Data , error:error1, isLoading:load1} = useSWR("http://localhost:3001/products_hp",axiosFetch);
  const {data:prod2Data , error:error2, isLoading:load2} = useSWR("http://localhost:3001/products_pc",axiosFetch);
  const {data:prod3Data , error:error3, isLoading:load3} = useSWR("http://localhost:3001/products_acc",axiosFetch);
  
  if (error0||error1||error2||error3) return <div>Failed to fetch data.</div>;
  if (load3) return <h2>Loading...</h2>;

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
        {promoData.map(product => (
          <ProductCard
          id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rate={product.rate}
            discount={product.discount}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">RECOMMENDED</div>
        <Productrow
          products={prod1Data}
          
        />
      </div>
      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">NEW PRODUCTS</div>
        <Productrow
          products={prod2Data}
          
        />
      </div>

      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">BEST SELLING</div>
        <Productrow
          products={prod3Data}
          
        />
      </div>

    </>
  );
};
  /*const [posts, setPosts] = useState([]);

  const getData = (link) => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(link, requestOptions)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));

      
  };
  useEffect(() => {
    getData("http://localhost:3001/products_promo");
  }, []);*/

export default Home;