import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductList from './components/ProductList'
import img1 from './assets/images/tablet.png'

import hp1 from './assets/images/hp1.jpg'
import hp2 from './assets/images/hp2.avif'
import hp3 from './assets/images/hp3.webp'
import hp4 from './assets/images/hp4.webp'
import hp5 from './assets/images/hp5.webp'
import hp6 from './assets/images/hp6.webp'
import hp7 from './assets/images/hp7.jpg'
import hp8 from './assets/images/hp8.jpg'

function App() {
  
  const products = [
    {
      id: 1,
      content: {
        image: hp1,
        title: "SAMSUNG A23",
        price: "3.000.000",
        rate: 4.3,
      },
    },
    {
      id: 2,
      content: {
        image: hp2,
        title: "SAMSUNG A34",
        price: "4.000.000",
        rate: 4.2,
      },
    },
    {
      id: 3,
      content: {
        image: hp3,
        title: "SAMSUNG S24",
        price: "10.000.000",
        rate: 5.0,
      },
    },
    {
      id: 4,
      content: {
        image: hp4,
        title: "SAMSUNG S24 ULTRA",
        price: "15.000.000",
        rate: 4.0,
      },
    },
    {
      id: 5,
      content: {
        image: hp5,
        title: "XIAOMI POCO M3",
        price: "2.000.000",
        rate: 3.8,
      },
    },
    {
      id: 6,
      content: {
        image: hp6,
        title: "XIAOMI POCO X5",
        price: "5.000.000",
        rate: 4.5,
      },
    },
    {
      id: 7,
      content: {
        image: hp7,
        title: "IPHONE 11",
        price: "9.000.000",
        rate: 3.1,
      },
    },
    /*{
      id: 8,
      content: {
        image: hp8,
        title: "IPHONE 15",
        price: "16.000.000",
        rate: 4.2,
      },
    },*/
    
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      
      <h1>Product List</h1>

      <div className="card flex justify-center content-center items-center">
        <ProductList products={products} />

      </div>

    </>
  );
}

export default App

 