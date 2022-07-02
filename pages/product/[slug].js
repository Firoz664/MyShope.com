/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import { useRouter } from 'next/router'
import {GrInstagram} from 'react-icons/gr';
import Link from  'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BsTwitter,BsFacebook,BsFillHeartFill,BsCircle,BsFillStarFill} from 'react-icons/bs';
import mongoose from 'mongoose';
import Product from '../../models/Product';


const Slug = ({buyNow,addToCart,product,variants}) => {
  console.log(product,variants)

    const router = useRouter()
    const {slug} = router.query;

    const[pin,setPin]=useState() 
    const[service,setService]=useState()
  
    //CheckServices
    const checkService= async()=>{
      // toast("Fetching your Pincode");
      let pins= await fetch(`${NEXT_PUBLIC_HOST}/api/pincode`);
      let pinJson =await pins.json()
      if(pinJson.includes(parseInt( pin))){
        setService(true)
        toast.info('Your pincode  is serviceable!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }else{
        setService(false)
        toast.info('Sorry  Your Pincode is not serviceable!', {
          position: "bottom-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      }
    }
    //set pincode
    const onChangePin=(e)=>{
      setPin(e.target.value)
    }
    const [color,setColor]=useState(product.color)
    const [size,setSize]=useState(product.size)
     // variant setting up
    const refreshVariants=(newsize,newcolor)=>{
      console.log('V' ,variants,newcolor,newsize)
      let url =`${process.env.HOST}/product/${variants[newcolor][newsize]['slug']}`
      window.location=url; 
    }
   

  return (
    <>
  <section className="text-gray-600 body-font overflow-hidden">
  <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  />

  <ToastContainer />
  <div className="container px-5 py-16 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-1 object-top rounded " src={product.img}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.title} <span className='text-gray-500 '>({product.size},{product.color})</span></h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <BsFillStarFill className='text-pink-500'/>
            <BsFillStarFill className='text-pink-500'/>
            <BsFillStarFill className='text-pink-500'/>
            <BsFillStarFill className='text-pink-500'/>
            <BsFillStarFill/>
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
            <a className="text-gray-500 mx-1">
            <BsFacebook/>
            </a>
            <a className="text-gray-500 mx-1">
            <BsTwitter/>
            </a>
            <a className="text-gray-500 mx-1">
            <GrInstagram/>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">{product.desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            {Object.keys(variants).includes('Green') && Object.keys(variants['Green']).includes(size) && <button onClick={()=>{refreshVariants (size,'Green')}} className={`border-2 border-white-300 bg-green-500 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'}`}></button>}
            {Object.keys(variants).includes('Pink') && Object.keys(variants['Pink']).includes(size) && <button onClick={()=>{refreshVariants(size,'Pink')}} className={`border-2 border-white-300 bg-pink-500 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'}`}></button>}
           
            {Object.keys(variants).includes('Yellow') && Object.keys(variants['Yellow']).includes(size) && <button onClick={()=>{refreshVariants(size,'Yellow')}} className={`border-2 border-white-300 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'}`}></button>}
            
            {Object.keys(variants).includes('Gray') && Object.keys(variants['Gray']).includes(size) && <button onClick={()=>{refreshVariants(size,'Gray')}} className={`border-2 border-white-300 bg-gray-500 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'}`}></button>}
            
            {Object.keys(variants).includes('Black') && Object.keys(variants['Black']).includes(size) && <button onClick={()=>{refreshVariants(size,'Black')}} className={`border-2 border-white-300 bg-gray-900 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-red':'border-gray-300'}`}></button>}
             
             {Object.keys(variants).includes('White') && Object.keys(variants['White']).includes(size) && <button onClick={()=>{refreshVariants(size,'White')}} className={`border-2 border-white-300 bg-gray-50 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-pink':'border-gray-300'}`}></button>}
            
            {Object.keys(variants).includes('Blue') && Object.keys(variants['Blue']).includes(size) && <button onClick={()=>{refreshVariants(size,'Blue')}} className={`border-2 border-white-300 bg-blue-500 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'}`}></button>}
            
            {Object.keys(variants).includes('Sky') && Object.keys(variants['Sky']).includes(size) && <button onClick={()=>{refreshVariants(size,'Sky')}} className={`border-2 border-white-300 bg-sky-300 rounded-full w-6 h-6 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'}`}></button>}
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select value={size} onChange={(e)=>{refreshVariants(e.target.value,color)}} className="rounded border appearance-none ${color==='Red'? 'border-black':'border-gray-300'} border-gray-300 py-2 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'} focus:ring-2 focus:ring-pink-200 focus:border-pink-500 text-base pl-3 pr-10">
                {Object.keys(variants[color]).includes('S') && <option value={'S'}>S</option>}
                {Object.keys(variants[color]).includes('M') && <option value={'M'}>M</option>}
                {Object.keys(variants[color]).includes('L') && <option value={'L'}>L</option>}
                {Object.keys(variants[color]).includes('XL') && <option value={'XL'}>XL</option>}
                {Object.keys(variants[color]).includes('XXL') && <option value={'XXL'}>XXL</option>}
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none ${color==='Red'? 'border-black':'border-gray-300'} flex items-center justify-center">
                <BsCircle/>
              </span>
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">{product.price}</span>
          <Link href={'/checkout'} onClick={()=>{buyNow(slug,1,product.price, product.title,size,color)}}><button  className="flex ml-8 text-white bg-pink-500 border-0 py-2 md:px-6 text-sm focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'} hover:bg-pink-600 rounded">Buy Now</button></Link>
          <button onClick={()=>{addToCart(slug,1,product.price, product.title,size,color)}} className="flex ml-4 text-white bg-pink-500 border-0 py-2 md:px-6 text-sm focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'} hover:bg-pink-600 rounded">Add to Cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <BsFillHeartFill/>
          </button>
        </div>
        <div className="pin mt-6 flex space-x-2 text-sm">
        <label htmlFor="text" className='mt-2 border-gray-300'>Enter Pincode</label>
          <input onChange={onChangePin} placeholder="Check Availability" className='px-2{`border-2 border-slate-4 00 rounded-sm' type="text" />
          <button  onClick={checkService} className="flex ml-14 text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none ${color==='Red'? 'border-black':'border-gray-300'} hover:bg-pink-600 rounded">Check</button>
        </div>
        {(!service && service !=null) &&<div className="text-red-700 text-sm mt-3">
        Sorry Service not Available to this pincode yet
        </div>}
        {(service && service !=null) &&<div className="text-green-700 text-sm mt-3">
         Service Available to this pincode Please Place Order 
        </div>}
      </div>
    </div>
  </div>
</section>
    </>
  )
}
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
  let product=await Product.findOne({slug:context.query.slug})
  let variants = await Product.find({title:product.title,category:product.category})

  let colorSizeSlug={}
  for(let item of variants){
    if(Object.keys(colorSizeSlug).includes(item.color)){
      colorSizeSlug[item.color][item.size]={slug:item.slug}
    }
    else{
      colorSizeSlug[item.color]={}
      colorSizeSlug[item.color][item.size]={slug:item.slug}
    }
  }
  return { 
    props: {product:JSON.parse(JSON.stringify(product)), variants:JSON.parse(JSON.stringify(colorSizeSlug))}, // will be passed to the page component as props
  }
}
export default Slug