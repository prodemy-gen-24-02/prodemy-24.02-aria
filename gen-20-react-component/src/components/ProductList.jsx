import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
    return (
      <div className="product-list grid grid-cols-4">
        {products.map(product => (
          <ProductCard key={product.id} image={product.content.image} title={product.content.title} price={product.content.price} rating={product.content.rate} />
        ))}
      </div>
    );
  };

  export default ProductList;