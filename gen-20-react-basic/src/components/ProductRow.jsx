import ProductCard from "./ProductCard";

function ProductRow({products}) {

    return (
        <div className="flex flex-col flex-wrap xl:flex-nowrap md:flex-row justify-center border-t border-solid border-gray-300 my-4">
        {products.map(product => (
            <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                discount={false}
            />
        ))}

        </div>
    );
};

export default ProductRow;