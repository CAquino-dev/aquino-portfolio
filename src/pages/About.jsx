import React from 'react'
import kuri from "../assets/kuri.jpg";

const About = () => {
  return (
<section id="about" className="bg-white pt-20 pb-15 px-6 md:px-20 font-poppins">
    <div className='flex'>
        <div className='w-1/2 pr-10'>
            <p className='text-8xl font-[600] pb-3'>about.</p>
            <p className='text-green-600 text-2xl font-[500] pb-5'>_Who am I and what I do</p>
            <p className='pb-5'>I am currenty a fourth year student studying at National College of Science and Technology</p>
            <p>As an aspiring web developer, I'm passionate about creating engaging online experiences. I'm constantly learning and experimenting with coding languages like HTML, CSS, and JavaScript to bring ideas to life on the web. With a keen eye for design and a love for problem-solving, I'm excited to delve deeper into the world of web development and contribute my creativity to the digital realm.</p>
        </div>
        <div className='w-1/2'>
            <div className="w-120 h-120  overflow-hidden  border-white shadow-[0_20px_50px_rgba(0,_0,_0,_0.5)]">
                <img
                src={kuri}
                alt="Profile"
                className="w-full h-full object-cover "
                />
            </div>
        </div>
    </div>
</section>
  )
}

export default About
