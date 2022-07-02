import React,{useState} from "react";
import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart} from "react-icons/fa";
// import { RiLogoutCircleRLine } from "react-icons/ri";
import { AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import { BsSearch,BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";


const Navbar = ({Logout,user,cart, clearCart,removeFromCart,addToCart}) => {
  //  console.log(cart,addToCart, removeFromCart,clearCart,subTotal)
   const [dropdown, setDropdown] = useState(false)
  // const setDropdown=()=>{
    
  // }
  const ref =useRef()
  const toggleCart=()=>{
    
    if (ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')

    }
     else if (!ref.current.classList.contains('translate-x-full')){
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  return (
    <div className="flex md:flex-row flex-col md:justify-start justify-center items-center mb-1.5 py-2 shadow-lg sticky top-0 bg-blue-100 z-10">
      <div className=" mr-auto md:mx-2 logo">
        <Link href={"/"}>
          <a>
            <Image className="text-gray-600" src="/logo.webp" width={200} height={50} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="nav">
        <ul className="flex  items-center space-x-4 font-semibold md:text-xl mx-10">
          <Link href={"/tshirts"}>
            <a>
              <li className="hover:text-gray-600">Tshirt</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li className="hover:text-gray-600">Hoodies</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li className="hover:text-gray-600">Mugs</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a>
              <li className="hover:text-gray-600">Stickers</li>
            </a>
          </Link>
          <Link href={"/laptop"}>
            <a>
              <li className="hover:text-gray-600">Laptop</li>
            </a>
          </Link>
          <Link href={"/caps"}>
            <a>
              <li className="hover:text-gray-600">Caps</li>
            </a>
          </Link>
          <Link href={"/sports"}>
            <a>
              <li className="hover:text-gray-600">Sports</li>
            </a>
          </Link>
        </ul>
      </div>
    
      <div className="flex items-center justify-center mx-10">
        <div className="flex border-2 rounded bg-white">
          <input
            type="text"
            className="px-4 py-2 w-70"
            placeholder="Search..."
          />
          <button className="flex border-1 items-center justify-center px-4 border-l hover:text-blue-400">
            <BsSearch />
          </button>
        </div>
        <a onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}}>
        {dropdown &&  <div onMouseOver={()=>{setDropdown(true)}} onMouseLeave={()=>{setDropdown(false)}} className="absolute right-10 bg-blue-200 mt-8 top-4 mx-24
         rounded-md px-5 w-35 py-2 shadow-lg">
              <ul>
               <Link href={'/myProfile'}><li className="py-1 text-bold hover:text-blue-500 cursor-pointer"> My Account</li></Link>
               <Link href={'/orders'}><li className="py-1 text-bold hover:text-blue-500 cursor-pointer">Orders</li></Link>
              <li onClick={Logout} className="py-1 text-bold hover:text-blue-500 cursor-pointer">Logout</li>
              </ul>
          </div>}
        {user.value && <MdAccountCircle  className="text-xl md:text-2xl mx-2 cursor-pointer"/>}
        </a>
        {!user.value && <Link href={'/login'}><a>
        <button className="bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded-full mx-24">Login</button></a></Link> }
      </div> 
      <div onClick={toggleCart} className="cart absolute right-0 top-5 mx-5">
          <a><FaShoppingCart className=" text-2xl md:text-2xl cursor-pointer"/></a> 
      </div> 
      {/* sideCart  from here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/}
      <div ref={ref} className=" w-76 h-[100vh] sideCart absolute top-0 right-0 bg-gray-100 py-10 px-8 transform transition-transform translate-x-full cursor-pointer ">
       
     <h2 className="font-bold text-xl text-center">Shooping Cart</h2>
     <span onClick={toggleCart} className="cursor-pointer absolute top-5 right-2 text-2xl text-gray-600"><AiFillCloseCircle/></span>
      <ol className="list-decimal font-semibold">
        {Object.keys(cart).length==0 && <div className="my-4 font-semibold">Your cart is Empty</div> }
        {Object.keys(cart).map((k)=>{return <li key={k}>
         <div className="item flex my-5">
          <div className="w-2/3 font-semibold">{cart[k].name}  {cart[k].size}/{cart[k].variant}</div>
          <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
          <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer text-gray-500"/><span className="mx-2">{cart[k].qty}</span>
          <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}  className="cursor-pointer text-gray-500"/></div>
          </div>
        </li>})}
      </ol>
      <div className="flex mt-40">
      <Link href={'/checkout'}><button className="flex mx-1 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-sm sm:mt-0"><BsFillBagCheckFill className="m-1"/>Checkout</button></Link>
      <button onClick={clearCart} className="flex mx-1 text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-sm sm:mt-0">Clear Cart</button>
      </div>
      </div>
    </div>
  );
};
export default Navbar;
