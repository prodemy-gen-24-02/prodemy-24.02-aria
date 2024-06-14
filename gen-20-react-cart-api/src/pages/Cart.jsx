import axios from 'axios';
import { useContext, useEffect } from 'react'
//import { CartContext } from './CartContext'
import { useReducer } from 'react'
import { useSelector, connect, useDispatch } from "react-redux";
//import { updateCartItem,updateCartItemQuantity,clearCart,getCartTotal } from 'src/store/action/cartAction'
import { clearCart, addItem, updateItem, fillCart } from 'src/store/cartSlice';
import useSWR from 'swr';
import axiosFetch from 'src/components/AxiosFetch';

function Cart({ showModal, toggle }) {
  //const { dataCheckout } = useSelector((state) => state.checkout);
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.cart);

  const { data: cartData, error: error1, isLoading: load1, mutate: mutateCart } = useSWR("http://localhost:3001/cart", axiosFetch);
  if (load1) return <h2>Loading...</h2>;
  //console.log(cart);
  useEffect(()=>{
    dispatch(fillCart(cartData));
  },[])
  //console.log("CEK");
  //console.log(items);
  let cartItems = items;
  //let cartState = items;
  //console.log(cartState);
  let totalPrice = 0;
  if (cartItems !== undefined && cartItems.length > 0) {
    cartItems.forEach(element => {
      let disc = element.product.discount;
      totalPrice += (element.product.price - disc - 1000) * element.quantity;
    });
  }
  //console.log(totalPrice);

  function handleClearCart() {
    cartData.forEach(element => {
      axios.delete(`http://localhost:3001/cart/${element.id}`);
    });
    mutateCart();
    dispatch(clearCart());
  }

  function handleUpdateItem(product, qty) {
    let cart = cartData;
    const item = cart.find(it => it.id == product.id);
    const prevQuantity = item ? item.quantity : 0;
    if (qty === 0) {//utk remove
      axios.delete(`http://localhost:3001/cart/${product.id}`);
      dispatch(updateItem({
        product: product,
        quantity: 0
      }));
      mutateCart();
    } else {
      if (prevQuantity == 0) {
        axios.post("http://localhost:3001/cart", {
          id: product.id,
          product: product,
          quantity: prevQuantity+qty
        }).then(() => {

          dispatch(addItem({
            product: product,
            quantity: prevQuantity + qty
          }));
          mutateCart();
        })
          .catch((error) => {
            console.log("Error", error);
          });
      } else {
        axios.put(`http://localhost:3001/cart/${product.id}`, {
          product: product,
          quantity: prevQuantity+qty
        }).then(() => {
          dispatch(addItem({
            product: product,
            quantity: prevQuantity + qty
          }));
          if (prevQuantity + qty == 0) axios.delete(`http://localhost:3001/cart/${product.id}`);
          mutateCart();
        }).catch((error) => {
          console.log("Error", error);
        });
        
      }
    }
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
                  <p className="text-gray-600">{item.product.price - item.product.discount - 1000}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    handleUpdateItem(item.product, 1)
                  }}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    handleUpdateItem(item.product, -1)
                  }}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    handleUpdateItem(item.product, 0)
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
                  handleClearCart()
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