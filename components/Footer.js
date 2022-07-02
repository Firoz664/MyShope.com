/* eslint-disable @next/next/no-img-element */

import Link from 'next/link';
import React from 'react'
import {BsLinkedin,BsTwitter,BsFacebook,BsBagCheckFill,BsGift} from 'react-icons/bs';
import {BiHelpCircle} from 'react-icons/bi';
import {GrInstagram} from 'react-icons/gr';
import {RiAdvertisementFill} from 'react-icons/ri';



const Footer = () => {
  return (
    <div>
                <footer  className="text-gray-600 body-font">
  <div  className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div  className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a  className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Link href={'/'}><img src="/logo.webp" alt="" /></Link>
      </a>
      <p  className="mt-2 text-sm text-blue-400 text-center font-bold mb-2">Wear the &lt;code/&gt;</p>
      <p className="mt-2 text-sm text-gray-900">-Premium Coding Collection -Laptop ,Hoodies,Sticker and Many more</p>
   
    </div>
    <div  className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div  className="lg:w-1/4 md:w-1/2 w-full px-4">
        <a><h2  className="title-font font-medium text-blue-400 tracking-widest text-sm mb-3">Shop</h2></a>
        <nav  className="list-none mb-10">
        <li>
           <Link href={'/tshirts'}><a  className="text-gray-600 hover:text-gray-800">T-Shirts</a></Link>
          </li>
          <li>
           <Link href={'/hoodies'}><a className="text-gray-600 hover:text-gray-800">Hoodies</a></Link>
          </li>
          <li>
            <Link href={'/stickers'}><a  className="text-gray-600 hover:text-gray-800">Stickers</a></Link>
          </li>
          <li>
            <Link href={'/laptop'}><a  className="text-gray-600 hover:text-gray-800">Laptops</a></Link>
          </li>
          <li>
            <Link href={'/mugs'}><a  className="text-gray-600 hover:text-gray-800">Custmize Mugs</a></Link>
          </li>
        </nav>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2  className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Us</h2>
        <nav  className="list-none mb-10">
          <li>
            <a  className="text-gray-600 hover:text-gray-800">CodeCom Internet Private Limited,
            <p>Buildings Alyssa, Begonia &Clove Embassy Tech Village</p> 
            <p>Outer Ring Road</p>
            <p>Bengaluru 560103 Karnataka India</p></a>
          </li>
          <li>
            <a  className="text-gray-600 hover:text-gray-800"></a>
          </li>
        </nav>
      </div>
      <div  className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2  className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav  className="list-none mb-10">
          <li>
            <a  className="text-gray-600 hover:text-gray-800"><img src="" alt="" /></a>
          </li>
          <li>
            <a  className="text-gray-600 hover:text-gray-800">Second Link</a>
          </li>
          <li>
            <a  className="text-gray-600 hover:text-gray-800">Third Link</a>
          </li>
          <li>
            <a  className="text-gray-600 hover:text-gray-800">Fourth Link</a>
          </li>
        </nav>
      </div>
     
    </div>
  </div>
  <div  className="bg-blue-100">
    <div  className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p  className="text-gray-500 text-sm text-center sm:text-left">Development By —
        <a href="https://github.com/Firoz664" rel="noopener noreferrer"  className="text-blue-500 ml-1" target="_blank">@Md Shams Firoz</a>
      </p>
      <div className='flex mx-9'>
      <a  className="text-gray-900">Become a Seller</a>
         <BsBagCheckFill className='items-center mx-2 mt-1'/>
      </div>
      <div className='flex mx-2'>
      <a  className="text-center text-gray-900">Gift Cards</a>
         <BsGift className='mx-2 mt-1'/>
      </div>
      <div className='flex mx-7 items-center'>
      <p  className="text-gray-900 text-sm text-center sm:text-left">Advertise</p>
         <a href=""><RiAdvertisementFill className= ' items-center mx-2 mt-1'/></a>
      </div>
      <div className='flex mx-7 items-center'>
      <Link href={'/contact'}><a  className="text-center mx-2 mt-1">Help Center</a></Link>
        <BiHelpCircle className='mx-2 mt-1'/>
      </div>
      
      <p className='text-center'>© 2021-2022 CodeWears.com</p>
      <span  className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a  className="text-gray-500">
         <BsFacebook/>
        </a>
        <a  className="ml-3 text-gray-500">
          <BsTwitter/>
        </a>
        <a  className="ml-3 text-gray-500">
         <GrInstagram/>
        </a>
        <a  className="ml-3 text-gray-500">
         <BsLinkedin/>
        </a>
      </span>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer 