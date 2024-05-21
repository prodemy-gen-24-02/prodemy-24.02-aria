import StarRatings from "react-star-ratings";

const ProductCard = ({ image, title, price, rating }) => {
  return (
    <div className="product-card flex flex-col rounded-xl py-2 m-4 items-center border shadow-lg z-10 bg-white">
      <img className="object-contain min-h-72 max-h-72 z-0 bg-white" src={image} alt={title} />
      <h3 className="font-semibold text-lg">{title}</h3>
      <span
        class="bg-white text-center text-red-500 border-red-500 border border-solid text-xs p-1"
        href="#">Bebas Pengembalian</span>
      <p className="font-extrabold text-xl">Rp. {price}</p>
      <span>
      <StarRatings
        rating={rating}
        starDimension="16px"
        starSpacing="1px"
        starRatedColor="black"
        numberOfStars={5}
      />
      {" "}
      {rating}
      </span>
      <div className="flex p-1 h-fit items-center">
        <a className="bg-red-500 text-center text-gray-100 p-2 hover:text-white hover:bg-gray-700" href="#">Add to Cart</a>
      </div>
    </div>
  );
};

export default ProductCard;