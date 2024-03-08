import React from 'react';
import banner from "../../assets/banner.jpg";

const Hero = () => {
  return (
    <div className='relative'>
      <div>
        {/* Use the imported image */}
        <img src={banner} alt="Banner" className='w-full object-cover object-center' />
      </div>
      <div className=' absolute top-[33%] left-[66%]'>
        <h1 className='text-1xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-500  font-bold'>Discover Adventure</h1>
        <p className='text-[10px] lg:text-2xl mt-2 lg:mt-5 font-semibold'>Shop Our Latest Arrival & Unleash Your Style</p>
      </div>
    </div>
  );
};

export default Hero;
