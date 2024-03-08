import React from 'react'
import Layout from '../../Components/Layout/Layout'
import loginImg from "../../assets/loginImg.jpg"
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Layout>
        <div>
            <div className='relative'>
                <img src={loginImg} className='w-full object-cover object-center h-[250px]'/>
                <div className='bg-black w-full h-[250px] absolute top-0 left-0 opacity-[0.4]'></div>
            </div>
        </div>
        
        <div className="container px-5 py-24 mx-auto flex">
            <div className="mx-auto bg-red-500 rounded-lg p-8 flex flex-col shadow-md text-white mt-10 md:mt-8">
                <h2 className="text-white text-[24px] mb-1 font-bold title-font">Login</h2>

            <div className="relative mb-4">
                <label for="email" class="leading-7  text-gray-700 text-xl">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/> 
            </div>
            <div className="relative mb-4">
                <label for="password" className="leading-7 text-xl text-gray-700">Password</label>
                <input type="text" id="password" name="password" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
            <p class="text-gray-700 text-sm mb-1 mt-3 font-medium title-font">
                Don't have an account?
                <Link to="/signup">
                <button className='text-indigo-500 hover:text-indigo-700 cursor-pointer'>Sign Up</button>
                </Link>
                 
            </p>

            </div>
        </div>
         
    </Layout>
    </>
  )
}

export default Login



