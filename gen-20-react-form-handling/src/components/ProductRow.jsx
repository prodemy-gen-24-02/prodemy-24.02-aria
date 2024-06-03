import ProductCard from "./ProductCard";

function ProductRow({ products }) {

    return (
        <div className="justify-center mx-auto content-center">
        <div className="flex flex-col flex-wrap md:flex-row border-t border-solid border-gray-300 my-4">
            
                {products.map(product => (
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
        </div>
    );
};

export default ProductRow;