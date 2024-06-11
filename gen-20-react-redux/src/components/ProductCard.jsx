import StarRatings from "react-star-ratings";
import React from 'react'
import toRupiah from "./ToRupiah";
import { CartContext } from './CartContext';
import { Link } from "react-router-dom";

//const { cartItems, addToCart } = useContext(CartContext);

function discountPrice(price,discount){
return (
<>
<h2 className="text-xl font-semibold text-red-500">{toRupiah(price - discount - 1000)}</h2>
<h3 className="text-gray-500 line-through text-lg">{toRupiah(price - 1000)}</h3>

</>
);
};

function normalPrice(price){

return (<h2 className="text-xl font-semibold">{toRupiah(price - 1000)}</h2>);
};

const ProductCard = ({ product, addItem }) => {

   return (
      <div className="flex flex-col border rounded-lg m-1 bg-white justify-center p-6">
         
         <div className="justify-center h-64 w-56">
            <img className="h-60 object-contain" src={product.image} />

         </div>
         <div className="flex flex-col">
            
            <h3 className="mb-2 text-xl"><Link to={`/detail/${product.id}`}><a href=''>{product.title}</a></Link></h3>
            <div>
            {(product.discount>=100000) ? discountPrice(product.price,product.discount) : normalPrice(product.price)}
            </div>
            <span>
            <StarRatings
        rating= {product.rate}
        starDimension="16px"
        starSpacing="1px"
        starRatedColor="yellow"
        numberOfStars={5}
      />{` ${product.rate}`}</span>
            <div className="mt-4">
               <a className="bg-red-500 text-center text-gray-100 p-2 hover:text-white hover:bg-gray-700 hover:cursor-pointer" 
               onClick={() => addItem(product)}>Add to Cart</a>
            </div>
         </div>

      </div>
   );
};
export default ProductCard;