import React from 'react'

const HeroSection = () => {
  return (
    <div className=' mt-5 md:mt-20 p-4 md:p-8 w-full grid gap-10 md:grid-cols-2'>
       <div className=''>
        <h4 className=' md:text-xl pt-10 text-blue-700 uppercase'>Welcome To</h4>
        <h1 className='text-4xl md:text-6xl font-bold md:pt-5'>Reddy Ismail Store</h1>
        <p className='pt-4 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias atque temporibus veniam doloribus libero ad error omnis voluptates animi! Suscipit sapiente.</p>
        <button className=' my-2 md:px-8 px-6 py-2 md:py-3 bg-blue-500 uppercase  text-white'>Show Now</button>
       </div>
       <div className='relative w-full'>
        <div className=' absolute lg:w-[50%] lg:h-[80%] md:w-[50%] md:h-[50%] md:top-[-30px] top-[-50px] right-[20px] bg-blue-400 z-[-10]'></div>
        <img src='./images/hero1.jpg' className='lg:max-w-[80%] md:max-w-[80%] m-auto max-w-[95%]'/>
       </div>
    </div>
  )
}

export default HeroSection