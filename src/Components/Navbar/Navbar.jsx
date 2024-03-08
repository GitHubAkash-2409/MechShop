import React, { useState } from 'react'
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleChange = () => {
        isOpen === false?setIsOpen(true):setIsOpen(false);
    }


  return (
    <>
        <div>
            <header className='bg-white border-b border-gray-200 relative'>
                <div className='container mx-auto flex justify-between p-5 items-center'>
                    <div>
                        <Link to="/">
                        <h3 className=' cursor-pointer font-bold text-2xl'>
                            Mech<span className='text-red-500'>Shop</span>
                        </h3>
                        </Link>
                    </div>

                    <div className='hidden md:block'>
                    <ul className='flex items-center text-lg justify-center font-semibold'>
                        <Link to="/"><li className='mr-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>       
                        <Link to="/allproducts">
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>All Products</li>
                        </Link>                 
                        
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>Mens</li>
                        <li className='mr-5 hover:text-gray-900 cursor-pointer'>Kids</li>
                    </ul>
                    </div>                   

                    {
                       isOpen? <div className=''>
                       <ul className='flex flex-col gap-10 text-2xl left-0 h-screen w-full z-10 items-center justify-center font-semibold absolute top-[73px] bg-[red]'>
                           <Link to="/"><li className='mt-5 hover:text-gray-900 cursor-pointer'>Home</li></Link>                        
                           <li className='mt-5 hover:text-gray-900 cursor-pointer'>All Products</li>
                           <li className='mt-5 hover:text-gray-900 cursor-pointer'>Mens</li>
                           <li className='mt-5 hover:text-gray-900 cursor-pointer'>Kids</li>
                       </ul>
                       <button className='absolute top-[75px] z-10 right-0 text-white py-2 px-4 cursor-pointer'>
                       <RxCross2  size={30} onClick={toggleChange}/>
                       </button>
                       </div> :""
                    }

                    

                    <div className='flex justify-center items-center gap-3'>
                        <Link to="/login">
                        <button className=' bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base font-semibold'>Login</button>
                        </Link>
                        
                        <Link to="/Cart"> <button><PiShoppingCartSimpleFill size={25} className=' cursor-pointer'/></button></Link>
                        {
                            isOpen?"": <button className='md:hidden' onClick={toggleChange}><GiHamburgerMenu size={25} /></button>
                        }
                       
                    </div>
                </div>
            </header>
        </div>
    </>
  )
}

export default Navbar