import React from 'react'
import { motion ,useScroll, useTransform} from 'framer-motion'
import projects from './data/projects.json'
const Projects = () => {
  return (
    <div className='relative pb-20'>
        <h2 className=' w-fit leading-snug bg-[#272626] mx-auto text-4xl text-center font-bold text-yellow-400 border-b-[2px] border-yellow-400'>
            Projects
        </h2>
        {projects.map((project,index)=> (
            <div key={index} className='flex flex-col md:flex-row gap-10 items-center mt-20'>
                {project.direction==="left" ? (
                    <>
                     <a href="" className='w-full order-1 md:w-1/2 md:order-none'>
                     <motion.img
                     initial={{x:40}}
                     whileInView={{x:0}}
                     transition={{duration:1,
                         delay:0.2
                     }}
                     viewport={{ once: true, amount: 1 }}
                     
                     src={project.imgSrc} alt="" className='w-72 mx-auto md:mr-auto md:mx-0'/>
                 </a>
                 <div className='w-full text-center order-2 md:w-1/2 md:order-none md:text-start'>
                     <h3 className='text-3xl font-bold '>{project.title}</h3>
                     <span className='text-lg'>{project.subtitle}</span>
                     <p className='text-justify'>{project.description}</p>
                 </div>
                 <div className='HorLine -z-10 h-[2px] bg-yellow-400 absolute right-1/2 left-[15%] hidden md:block'></div>
                 <div className='circle border-2 border-yellow-400 bg-[#272626] rounded-full w-4 h-4 absolute left-1/2 -translate-x-1/2 hidden md:block'></div>
                    </>


                ):(<>
                    <div className='w-full text-center order-2 md:w-1/2 md:order-none md:text-start'>
                    <h3 className='text-3xl font-bold '>{project.title}</h3>
                     <span className='text-lg'>{project.subtitle}</span>
                     <p className='text-justify'>{project.description}</p>
            </div>
            <a href="" className='w-full order-1 md:w-1/2 md:order-none'>
                <motion.img
                initial={{x:-40}}
                whileInView={{x:0}}
                transition={{duration:1,
                    delay:0.2}}
                    viewport={{ once: true, amount: 1 }}
                    src={project.imgSrc} alt="" className='w-72 mx-auto md:ml-auto md:mx-0'/>
            </a>
            <div className='HorLine -z-10 h-[2px] bg-yellow-400 absolute right-[15%] left-1/2 hidden md:block'></div>
            <div className='circle border-2 border-yellow-400 bg-[#272626] rounded-full w-4 h-4 absolute left-1/2 -translate-x-1/2 hidden md:block'></div>
                </>)}
                       
        </div>
        )) }
        <div className='VerLine -z-10 w-[2px]  bg-yellow-400 absolute left-1/2 top-0 bottom-0 hidden md:block'>

        </div>
    </div>
  )
}

export default Projects