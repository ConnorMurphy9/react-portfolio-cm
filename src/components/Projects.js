import React from "react";
import { motion } from "framer-motion";
// import { projects } from "../data";

export default function Projects() {
  return (
    // <section id="projects" className="text-gray-400 bg-gray-900 body-font">
    //   <div className="container px-5 py-10 mx-auto text-center lg:px-40">
    //     <div className="flex flex-col w-full mb-20">
    //       <CodeIcon className="mx-auto inline-block w-10 mb-4" />
    //       <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
    //         Apps I've Built
    //       </h1>
    //       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
    //         facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
    //         fuga dolore.
    //       </p>
    //     </div>
    //     <div className="flex flex-wrap -m-4">
    //       {projects.map((project) => (
    //         <a
    //           href={project.link}
    //           key={project.image}
    //           className="sm:w-1/2 w-100 p-4">
    //           <div className="flex relative">
    //             <img
    //               alt="gallery"
    //               className="absolute inset-0 w-full h-full object-cover object-center"
    //               src={project.image}
    //             />
    //             <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
    //               <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
    //                 {project.subtitle}
    //               </h2>
    //               <h1 className="title-font text-lg font-medium text-white mb-3">
    //                 {project.title}
    //               </h1>
    //               <p className="leading-relaxed">{project.description}</p>
    //             </div>
    //           </div>
    //         </a>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <h2> Apps I Have Built:
      <motion.div animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-100 text-black dark:bg-blue-500 dark:text-white">
        <section id="projects" className="text-white bg-gray-900 body-font">
            Cocktail & Dinner Recipe Generator
            <a href="https://connormurphy9.github.io/project-one/">
              <img className="object-cover object-center rounded something"
                 alt="My Recipe Generator App"
                src="./Project_1_image.png"></img>
            </a>
            Live Chat Engine
            <a href="https://chattastic-rat.herokuapp.com/login">
            <img className="object-cover object-center rounded something"
              alt="My Chat Engine App"
              src="./chat_engine.png"></img>
            </a>
          
       


        
      </section>

      </motion.div>
    </h2>
    

  );
}
