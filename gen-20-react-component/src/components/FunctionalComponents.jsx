import React from "react";
import ProductCard from './ProductCard';

function ProductShow(prod) {

return(
    <div className="bg-gray-700 border border-solid border-black">
    <ProductCard image={prod.image} title={prod.title} price={prod.price} />
    </div>
);
}

export default ProductShow;