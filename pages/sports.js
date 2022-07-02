/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Banner from "./banner";
import Product from "../models/Product";
import mongoose from "mongoose";

const Sports = ({products}) => {
  return (
  <div>
  <Banner className="sticky " />
  <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-center">
    {Object.keys(products).length===0 && <p>Sorry all the sports are currently unavailable will get back soon please stay tunned🕔</p>}
    {Object.keys(products).map((item)=>{
      return <Link passHref={true} key={products[item]._id} href={`/product/${products[item].slug}`}> 
      <div className="lg:w-1/5 md:w-1/2 p-4 w-full cursor-pointer shadow-lg m-5">
        <a className="block relative  rounded overflow-hidden">
          <img alt="ecommerce" className="m-auto h-[30vh] md:h-[36vh] block" src={products[item].img}/>
        </a>
        <div className=" mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 m-auto">{products[item].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium hover:text-pink-500 ">{products[item].title}</h2>
          <p className="mt-1">₹ {products[item].price}</p>
          <div className="mt-1">
            {products[item].size.includes('S') && <span className="border border-gray-500 px-1 mx-1">S</span>}
            {products[item].size.includes('M') && <span className="border border-gray-500 px-1 mx-1">M</span>}
            {products[item].size.includes('L') && <span className="border border-gray-500 px-1 mx-1">L</span>}
            {products[item].size.includes('XL') && <span className="border border-gray-500 px-1 mx-1">XL</span>}
            {products[item].size.includes('XXL') && <span className="border border-gray-500 px-1 mx-1">XXL</span>}
          </div>
          <div className="mt-1">
          {products[item].color.includes('Pink') &&<button className="border-2 border-gray-300 ml-1 bg-pink-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('Yellow') &&<button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('Gray') &&<button className="border-2 border-gray-300 ml-1 bg-gray-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('Black')&&<button className="border-2 border-gray-300 ml-1 bg-gray-900 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('White') &&<button className="border-2 border-gray-300 ml-1 bg-gray-50 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('Blue') &&<button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('Red') &&<button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
          {products[item].color.includes('Sky') &&<button className="border-2 border-gray-300 ml-1 bg-sky-300 rounded-full w-6 h-6 focus:outline-none"></button>}
          </div>
          <button className='text-pink-600' >Buy Now</button>
        </div>
      </div>
      </Link>})}
    </div>
  </div>
</section>
    </div>
  );
};
export async function getServerSideProps(context) {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
}
  let products=await Product.find({category:'Sports'})
  let sport={}
  for(let item of products){
    if(item.title in sport){
      if(!sport[item.title].color.includes(item.color) && item.availableQty>0){
        sport[item.title].color.push(item.color)
      }
      if(!sport[item.title].size.includes(item.size) && item.availableQty>0){
        sport[item.title].size.push(item.size)
      }
    }
    else{
      sport[item.title]=JSON.parse(JSON.stringify(item))
      if(item.availableQty>0){
        sport[item.title].color=[item.color]
        sport[item.title].size=[item.size]
      }
    }
  }
  return { 
    props: {products:JSON.parse(JSON.stringify(sport))}, // will be passed to the page component as props
  }
}
export default Sports;


