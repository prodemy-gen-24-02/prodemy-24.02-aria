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
import { CartContext } from 'src/components/CartContext'
import Cart from 'src/components/Cart';

function Home() {

  //const {data:promoData , error:error0, isLoading:load0} = useSWR("http://localhost:3001/products_promo",axiosFetch);
  const {data:prod1Data , error:error1, isLoading:load1} = useSWR("http://localhost:3001/products_hp",axiosFetch,
    {
    revalidateOnFocus: false,
    revalidateIfStale: false,
}
);
  const {data:prod2Data , error:error2, isLoading:load2} = useSWR("http://localhost:3001/products_pc",axiosFetch,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
  }
  );
  const {data:prod3Data , error:error3, isLoading:load3} = useSWR("http://localhost:3001/products_acc",axiosFetch,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
  }
  );
  
  if (error1||error2||error3) return <div>Failed to fetch data.</div>;
  if (load1||load2||load3) return <h2>Loading...</h2>;
  const { cartItems, addToCart } = useContext(CartContext);
  const [promoData, setPromoData] = useState([]);
  //const [showModal, setshowModal] = useState(false);
  
  /*const toggleCart = () => {
    setshowModal(!showModal);
  };*/

  useEffect(()=>{
    let promo = [];
    promo.push(prod1Data[0],prod1Data[3],prod1Data[6],prod1Data[8],prod1Data[9]);
    setPromoData(promo);
    console.log(promoData);
  },[]);


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
        {promoData.map(product => {
          //console.log(product);
          return (
          <ProductCard
            product={product}
            addItem={addToCart}
          />
        );}
      )}
      </div>
      <div>        
                    {/*!showModal && <button className='px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700'
          onClick={toggleCart}
        >Cart ({cartItems.length})</button>*/}
                    
                    </div>
      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">RECOMMENDED</div>
        <Productrow
          products={prod1Data}
          addItem={addToCart}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">NEW PRODUCTS</div>
        <Productrow
          products={prod2Data}
          addItem={addToCart}
        />
      </div>

      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">BEST SELLING</div>
        <Productrow
          products={prod3Data}
          addItem={addToCart}
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