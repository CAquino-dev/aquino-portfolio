import React from 'react'
import image from "../assets/gameImage.png"

const Home = () => {
  return (
    <div className='flex'>
        <div className="w-1/2 h-[500px] flex items-center justify-center">
            <div className="w-130 h-130 overflow-hidden ">
                <img
                src={image}
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-300 hover:-rotate-5 hover:scale-90"
                />
            </div>
        </div>
        <div className=" w-1/2 h-[500px] flex flex-col justify-center gap-[15px]">
            <p className='text-3xl font-bold'>Hello, I go by Christian!</p>
            <p className='text-5xl font-extrabold'>I  <span className='text-green-600'>Design</span> And <span className='text-green-600'>Develop</span> <br/> Websites</p>
        </div>
    </div>
  )
}

export default Home