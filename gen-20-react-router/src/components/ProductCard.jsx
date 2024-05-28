import StarRatings from "react-star-ratings";
import React from 'react'
import toRupiah from "./ToRupiah";

function discountPrice(price,rate){
return (
<>
<h2 className="text-xl font-semibold text-red-500">{toRupiah(price - 1501000)}</h2>
<h3 className="text-gray-500 line-through text-lg">{toRupiah(price - 1000)}</h3>

</>
);
};

function normalPrice(price){

return (<h2 className="text-xl font-semibold">{toRupiah(price - 1000)}</h2>);
};

const ProductCard = ({ id,image, title, price, rate, discount }) => {

   return (
      <div className="flex flex-col border rounded-lg m-2 bg-white justify-center p-6">
         
         <div className="justify-center h-64 max-w-60">
            <img className="h-60 object-contain" src={image} />

         </div>
         <div className="flex flex-col">
            <h3 className="mb-2 text-xl"><a href={`/detail/${id}`}>{title}</a></h3>
            <div>
            {discount ? discountPrice(price,rate) : normalPrice(price)}
            </div>
            <StarRatings
        rating={rate}
        starDimension="16px"
        starSpacing="1px"
        starRatedColor="yellow"
        numberOfStars={5}
      />
            <div className="mt-4">
               <a className="bg-red-500 text-center text-gray-100 p-2 hover:text-white hover:bg-gray-700" href="#">Add to Cart</a>
            </div>
         </div>

      </div>
   );
};
export default ProductCard;