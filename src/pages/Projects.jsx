import React from 'react'
import DUV from '../assets/DUV.png'

const projects = [
  {
    date: "2025",
    projectName: "DUV Engineers",
    projectImg: DUV,
    tech: ["ReactJs", "TailwindCSS", "Express", "NodeJs", "MySQL"]
  },
  {
    date: "2025",
    projectName: "DUV Engineers",
    projectImg: DUV,
    tech: ["ReactJs", "TailwindCSS", "Express", "NodeJs", "MySQL"]
  },  
]

const Projects = () => {
  return (
    <div className='p-20'>
      <div className='h-[120px] w-full flex justify-end items-center pr-15 border-b border-gray-600'>
        <h1 className='font-poppins text-7xl font-[800] pb-3'>personal projects.</h1>
      </div>

      <div className='flex'>
        <div className="w-1/3 h-[300px] font-poppins flex py-12">
          <p className='text-4xl font-[700]'>index.</p>
        </div>

        
        <div className="w-2/3 p-10 border-l border-gray-600 font-poppins flex flex-col gap-20">
        {projects.map((p, index) => (
            <div key={index} className='w-full'>
                {/* Header Row */}
                <div className="flex py-4 px-8 items-center border-b-2 border-gray-600 border-dashed">
                <div className='flex gap-10 items-center flex-1'>
                    <p>/{p.date}</p>
                    <p className='text-[25px] font-bold'>{p.projectName}</p>
                </div>

                <div className='flex items-center gap-3 text-[10px]'>
                    {p.tech.map((t, i) => (
                    <span
                        key={i}
                        className="px-3 py-1 bg-black text-white font-medium hover:bg-gray-800 cursor-pointer"
                    >
                        {t}
                    </span>
                    ))}
                </div>
                </div>

                {/* Description + Image */}
                <div className='w-full px-8 py-3'>
                <p className='pb-3'>
                    DUV Engineers is an ERP Web based project made for an engineering company here in the Philippines
                </p>
                <div className="w-full h-[380px] flex items-center justify-center overflow-hidden">
                    <img
                    src={p.projectImg}
                    alt={p.projectName}
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
            </div>
        ))} 
        </div>
       

      </div>
    </div>
  )
}

export default Projects
