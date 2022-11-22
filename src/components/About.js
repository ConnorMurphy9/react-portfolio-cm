import React from "react";
import { motion } from "framer-motion/dist/es/index";

function About () {
    
    return (
      <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
      <motion.div animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-100 text-black dark:bg-blue-500 dark:text-white"> 
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-top text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello, I'm Connor.
              <br className="hidden lg:inline-block" />I love to make apps.
            </h1>
            <p className="mb-8 leading-relaxed">
              Hey there, I'm Connor. I am a healthcare professional turned programmer who has a passion for learning. I have found a 
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="My resume"
              src="./resume_img.jpg"
            />
          </div>
          </motion.div>
        </div>
      </section>
               
      
    )
}

export default About