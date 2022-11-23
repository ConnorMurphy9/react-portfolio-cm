// import '../index.css
import React from "react";
// import { ArrowRightIcon } from "@heroicons/react/solid";

function Navbar (props) {
  const toggleTheme = () => { 
    document.body.className !== "dark"
    ? document.body.className = "dark" 
    : document.body.className = ""

}
    return (

        <header className="dark:bg-gray-800 dark:text-white text-black md:sticky top-0 z-10">
             <ul>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <li onClick={ () => props.setPage("About")} className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            About Me
                        </li>
                        <li onClick={ () => props.setPage("Projects")} className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            Projects
                        </li>
                        <li onClick={ () => props.setPage("Skills")} className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            Skills
                        </li>
                        <li onClick={ () => props.setPage("Contact")} className="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            Contact Me

                        </li>
                        <button class="inline-flex items-center dark:bg-gray-800 dark:text-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0" onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                </div>
            </ul>
        </header>
     
    )
}

export default Navbar