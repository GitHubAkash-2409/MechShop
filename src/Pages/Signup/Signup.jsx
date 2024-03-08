import React from 'react'
import Layout from '../../Components/Layout/Layout'
import signup from "../../assets/signup.jpg"

const Signup = () => {
  return (
    <>
    <Layout>
        <div>
            <div className='relative'>
                <img src={signup} className='w-full object-cover object-center h-[250px]'/>
                <div className='bg-black w-full h-[250px] absolute top-0 left-0 opacity-[0.4]'></div>
            </div>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
            <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col shadow-md text-white mt-10 md:mt-8">
                <h2 className="text-white text-[24px] mb-1 font-bold title-font text-center">sign up</h2>
                <div className="relative mb-4">
                <label for="name" className="leading-7 text-xl text-gray-700">Name</label>
                <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="email" class="leading-7  text-gray-700 text-xl">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> 
            </div>
            <div className="relative mb-4">
                <label for="mobile" className="leading-7 text-xl text-gray-700">Mobile No.</label>
                <input type="text" id="mobile" name="mobile" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="password" className="leading-7 text-xl text-gray-700">Password</label>
                <input type="text" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
                <label for="confirmPassword" className="leading-7 text-xl text-gray-700">Confirm Password</label>
                <input type="text" id="confirmPassword" name="confirmPassword" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">sign up</button>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default Signup