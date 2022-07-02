import React from 'react'
import Link from "next/link";
import {AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import {MdOutlinePayment } from "react-icons/md";
import Head from 'next/head';
import Script from 'next/script';


const Checkout = ({cart, subTotal,removeFromCart,addToCart}) => {

  const initiatePayment= async()=>{ 
   let oid = Math.floor(Math.random()*Date.now()); 
   //Get Transanction Token
   const data = { cart,subTotal,oid,email:"email"};

  let a= await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pretransaction`,{
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
let txnRes = await a.json();
console.log(txnRes)
let txnToken=txnRes.txnToken

    var config = {
      "root": "",
      "flow": "DEFAULT",
      "data": {
      "orderId": oid, /* update order id */
      "token": txnToken, /* update token value */
      "tokenType": "TXN_TOKEN",
      "amount":subTotal /* update amount */
      },
      "handler": {
        "notifyMerchant": function(eventName,data){
          console.log("notifyMerchant handler function called");
          console.log("eventName => ",eventName);
          console.log("data => ",data);
        } 
      }
    };
// initialze configuration using init method 
  window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
    console.log("init j")
    // after successfully updating configuration, invoke JS Checkout
    window.Paytm.CheckoutJS.invoke();
      }).catch(function onError(error){
          // console.log("error => ",error);
  }); 
  }
  return (
    <div className='container px-3 sm:m-auto'>
    <Head><meta /><meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"/></Head>
    <Script type="application/javascript" crossorigin="anonymous" src={`${process.env.NEXT_PUBLIC_PAYTM_HOST}/merchantpgpui/checkoutjs/merchants/${process.env.NEXT_PUBLIC_PAYTM_MID}.js`}/> 

     <h1 className='font-bold text-3xl my-8 text-center'>Checkout</h1>
     <h2 className='font-bold text-xl'>Delivery details</h2>
      <div className="mx-auto flex">
        <div className="px-2 w-1/2">
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="name" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>

        <div className="px-2 w-1/2">
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>

      </div>
      <div className="px-2 w-full">
          <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea name="" id="" cols="30" rows="2" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
          
        </textarea>
          </div>
        <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className="px-2 w-1/2 ">
        <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>
      <div className="mx-auto flex my-2">
          <div className="px-2 w-1/2">
        <div className="relative mb-4">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      <div className="px-2 w-1/2 ">
        <div className="relative mb-4">
        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
        <input type="number" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      </div>
      </div>
      
        </div>
        <h2 className='font-bold text-xl'>2.Review Cart Items</h2>
        {/* sideCart */}
        <div  className="sideCart  bg-blue-100 p-6 m-2 ">
         
         <ol className="list-decimal font-semibold">
        {Object.keys(cart).length==0 && <div className="my-4 font-semibold">Your cart is Empty</div> }
        {Object.keys(cart).map((k)=>{return <li key={k}>
         <div className="item flex my-5">
          <div className="w-2/3 font-semibold">{cart[k].name}({cart[k].size}/{cart[k].variant})</div>
          <div className="flex items-center justify-center w-1/3 text-lg">
          <AiFillMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className="cursor-pointer text-blue-400 mt-0 font-lx"/><span className="mx-2">{cart[k].qty}</span>
          <AiFillPlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}  className="cursor-pointer text-blue-400"/></div>
          </div>
        </li>})}
          <span className="total font-bold">Subtotal:{subTotal}</span>
      </ol>
    </div>
      <Link href={'/checkout'}><button onClick={initiatePayment} className="flex mx-1 mb-3 text-white bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-blue-400 rounded text-sm sm:mt-0"><MdOutlinePayment className="m-1"/>Pay {subTotal}</button></Link>
      </div>
  )
}

export default Checkout