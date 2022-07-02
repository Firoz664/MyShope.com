/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {BsArrowRightSquareFill} from "react-icons/bs";
const Feature = () => {
  return (
    <div>
        <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 bg-blue-200">
            <div className="lg:flex items-center justify-between">
                <div className="lg:w-1/3">
                    <h1 className="text-4xl font-semibold leading-9 text-gray-800">Technology Enthusiastic</h1>
                    <p className="text-base leading-6 mt-4 text-gray-600">Get inspired by our curated selection of Technology. We hope get inspired to have Technology yourself. You’ll find tips here where you can buy a lot of cool Technologye.</p>
                    <button aria-label="view catalogue" className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-base font-semibold leading-none flex items-center hover:underline text-gray-900 hover:text-blue-300">
                        View Catalogue
                        <BsArrowRightSquareFill className='ml-1 mt-1'/>
                    </button>
                </div>
                <div className="lg:w-7/12 lg:mt-0 mt-8">
                    <div className=" bg-blue-200">
                        <img width={1000} height={600} src="https://www.productplan.com/uploads/The-7-Strategic-Phases-of-the-Product-Planning-Process-1.png" alt="apartment design" className="sm:block hidden" />
                        <img src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="apartment design" className="sm:hidden block w-full" />
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-6 gap-6 lg:mt-8 md:mt-6 mt-4">
                        <img src="https://i.ibb.co/4Jrp5TB/pexels-max-vakhtbovych-6782370-1.png" className="w-full" alt="kitchen" />
                        <img src="https://i.ibb.co/0Jv3FSy/pexels-max-vakhtbovych-6436799-1-1.png" className="w-full" alt="sitting room" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature