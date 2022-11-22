import React from "react";
import { motion } from "framer-motion/dist/es/index";

function Home () {

    return (
        <div>
        <motion.div animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-100 text-black dark:bg-blue-500 dark:text-white">
        <p>Connor Murphy, Software Developer</p>
        <div className="portrait">
            <img class="h-48 w-full object-cover md:h-full md:w-48"
            alt="Me"
            src="./portrait.jpg"
            ></img>
        </div>
        
        </motion.div>

       
 

    </div>


    )
}
    export default Home