import React from 'react'
import { useState } from 'react'
import 'src/App.css'

import ProductCard from 'src/components/ProductCard'
import Productrow from 'src/components/ProductRow'
import banner1 from 'src/assets/images/img1.jpg'
import { promos } from 'src/data/ListArray'
import { prod0 } from 'src/data/ListArray'
import { prod1 } from 'src/data/ListArray'
import { prod2 } from 'src/data/ListArray'
function Home() {

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
        {promos.map(product => (
          <ProductCard
          id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            rate={product.rate}
            discount={true}
          />
        ))}
      </div>
      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">FEATURED</div>
        <Productrow
          products={prod0}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-left w-full text-2xl">NEW PRODUCTS</div>
        <Productrow
          products={prod1}
        />
      </div>

      <div>
        <div className="text-left w-full text-2xl">BEST SELLING</div>
        <Productrow
          products={prod2}
        />
      </div>

    </>
  );
};

export default Home;