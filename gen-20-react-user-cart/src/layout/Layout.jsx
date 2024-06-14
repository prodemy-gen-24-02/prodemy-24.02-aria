import React, { useContext, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin";
import { CartProvider, CartContext } from 'src/components/CartContext.jsx'
//import Cart from 'src/components/Cart';
import Cart from 'src/pages/Cart';
//import { updateCartItem,updateCartItemQuantity,clearCart,getCartTotal } from 'src/store/action/cartAction'
import { connect } from "react-redux";
import Login from "src/pages/Login";


function Layout({ children }) {


  //const { cartItems, addToCart } = useContext(CartContext);
  const [showModal, setshowModal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  function addItem(item){
    addToCart(item);
    //console.log("ITEM F");
  }
  const toggleCart = () => {
    
    setshowModal(!showModal);
    //console.log(showModal);
  };
  const toggleLogin = () => {
    navigate('/login')
    //setShowLogin(!showLogin);
    //console.log(showModal);
  };

  if (useLocation().pathname == "/admin" || useLocation().pathname == "/adminform" || useLocation().pathname == "/adminupdate/") {
    return (
      <>
        <HeaderAdmin />
        <div className="flex flex-col justify-center pt-2 min-h-screen">{children}</div>

      </>
    );
  } else
    return (
      <>
        
          <Header cartToggle={toggleCart} loginToggle={toggleLogin}/>
          <div className={`${showLogin ? "flex absolute" : "hidden"}`}>
          <Login />
          </div>
          <div className="flex flex-col justify-center pt-2">{React.cloneElement(children,{addItem})}</div>
          <Footer />
          <Cart showModal={showModal} toggle={toggleCart} />

      </>
    );
}
const mapStateToProps = state => ({
  cart: state.cart
});

export default connect(
  mapStateToProps,
  null
)(Layout);
