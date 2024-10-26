import React from 'react'
import pdf from '../pdf/HimanshuCV.pdf'
import { motion } from "framer-motion";

const Home = () => {
  return (
        <div className='h-screen flex flex-col justify-center  md:flex-row md:justify-between items-center p-4'>
            <motion.div
             initial={{ opacity: 0, y: 0 }}
             animate={{ opacity: 1, y: 10 }}
             transition={{
                 duration: 1,
                 delay: 0.3,
                 ease: [0.6, -0.05, 0.2, 0.95],
             }}
    
            
            className="order-2 md:order-none h-auto w-full md:w-2/3 text-center bg-zinc-800 p-6 md:p-8 border border-yellow-400 rounded-md shadow-md shadow-yellow-400">
                <h1 className='font-bold text-2xl md:text-4xl mb-4 md:mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam quas animi quod expedita.
                </h1>
                <a href={pdf} download='Resume.pdf' className='inline-block px-3 py-2 border rounded-md border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black hover:scale-110 duration-200 ease-linear' 
                >Download Resume</a>
            </motion.div>
            <div className="order-1 md:order-none">
                <div className='right flex justify-center items-center mt-6 md:mt-0'>
                    <motion.img className='animate-anime w-56 md:w-72 h-auto rounded-full border-4 border-yellow-400' src="/images/profileBL.png" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Home