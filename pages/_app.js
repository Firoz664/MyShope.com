/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { useState, useEffect} from "react";
import { useRouter } from 'next/router'
// import Feature from "./feature";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'



function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const [user, setUser] = useState({value:null})
  const [key, setKey] = useState()
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  // use Effect funtion
  useEffect(() => {
    router.events.on('routeChangeStart',()=>{
      setProgress(40)
    })
    router.events.on('routeChangeComplete',()=>{
      setProgress(100)
    })
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart"))) 
      }
    } catch (error) {
      console.error(error);
      localStorage.clear();
    }
    const token =localStorage.getItem('token')
    if(token){
      setUser({value:token})
      setKey(Math.random())  
    }
  }, [router.query]);
  // Save the product to the cart
  const saveCart = (myCart) => {
    localStorage.setItem("cart",JSON.stringify( myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0;i< keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  };
  // Logout function
  const logout=()=>{
    localStorage.removeItem("token")
    setUser({value:null})
    setKey(Math.random)
    router.push('/')
  }
  // Adding to cart function
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
      toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, variant };

    }
    setCart(newCart);
    console.log(newCart)
    saveCart(newCart);
  };
  //Buy now function
  const buyNow=(itemCode, qty, price, name, size, variant)=>{
    let newCart ={itemCode:{ qty: 1, price,name,size, variant}};
    setCart(newCart);
    saveCart(newCart);
    console.log(newCart)
    router.push('/checkout')
  }
  // Clearing cart function
  const clearCart = () => {
    setCart({});
    saveCart({});
  };
  // Remove product from cart funtions
  const removeFromCart = (itemCode, qty, name, price, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty;
    }
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  return (
    <>
        <LoadingBar
        color='#0099e6'
        waitingTime={800}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
     <Navbar
       Logout={logout}
       user={user}
        key={key}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart} subTotal={subTotal}
      />
      <Component
        buyNow={buyNow}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart} subTotal={subTotal}
        {...pageProps}
      />
      
      <Footer />
    </>
  );
}
export default MyApp;
