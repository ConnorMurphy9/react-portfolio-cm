import React from "react";
import { motion } from "framer-motion/dist/es/index";

function Home () {
const toggleTheme = () => { 
    document.body.className !== "dark"
    ? document.body.className = "dark" 
    : document.body.className = ""

}
    return (
        <div>
        <motion.div animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 2 }}className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center bg-blue-100 dark:bg-blue-500">
        <p>Connor Murphy, Software Developer</p>
        </motion.div>

        <button onClick={toggleTheme}>Toggle Theme</button>
 

    </div>


    )
}
    export default Home