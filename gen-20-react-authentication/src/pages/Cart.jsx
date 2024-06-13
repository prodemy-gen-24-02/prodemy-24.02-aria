import axios from 'axios';
import { useContext } from 'react'
//import { CartContext } from './CartContext'
import { useReducer } from 'react'
import { useSelector, connect, useDispatch } from "react-redux";
//import { updateCartItem,updateCartItemQuantity,clearCart,getCartTotal } from 'src/store/action/cartAction'
import { clearCart, addItem, updateItem } from 'src/store/cartSlice';

function Cart ({showModal, toggle, clearCart, updateItem}) {
  //const { dataCheckout } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  //console.log(cart);
let cartItems=items;
let totalPrice = 0;
cartItems.forEach(element => {
  let disc = element.product.discount;
  totalPrice+=(element.product.price-disc-1000)*element.quantity;
});
console.log(totalPrice);



function handleUpdateItem(product,qty){

  axios.post("http://localhost:3001/cart",{
    product:product,
    quantity: qty
}).then(() => {
  mutate();
})
  .catch((error) => {
    console.log("Error", error);
  });

  if(qty===0){//utk remove
    dispatch(addItem({
      product:product,
      quantity: qty
  }));
  }else{

  let cart=items;
  const item = cart.find(it => it.product.id == product.id);
  const prevQuantity = item ? item.quantity : 0;
  dispatch(addItem({
    product:product,
    quantity: prevQuantity+qty
}));}
}


  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8  p-10  text-black dark:text-white font-normal uppercase text-sm">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            
            <div className="flex justify-between items-center" key={item.product.id}>
              <div className="flex gap-4">
                <img src={item.product.image} alt={item.product.title} className="rounded-md h-24" />
                <div className="flex flex-col">
                  <h1 className="text-lg font-bold">{item.product.title}</h1>
                  <p className="text-gray-600">{item.product.price-item.product.discount-1000}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    handleUpdateItem(item.product,1)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    handleUpdateItem(item.product,-1)
                  }}
                >
                  -
                </button>
              </div>
              <div>          
                <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              handleUpdateItem(item.product,0)
            }}
          >
            Remove
          </button>
          </div>
            </div>
          ))}
        </div>
        {
          cartItems.length > 0 ? (
            <div className="flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold">Total: ${totalPrice}</h1>
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={() => {
              clearCart()
            }}
          >
            Clear cart
          </button>
        </div>
          ) : (
            <h1 className="text-lg font-bold">Your cart is empty</h1>
          )
        }
      </div>
    )
  )
}

const mapStateToProps = state => ({
  cart: state.cart
});

/*export default connect(
  mapStateToProps,
  {clearCart,updateItem}
)(Cart);*/
export default Cart;