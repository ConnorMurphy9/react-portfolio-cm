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

        <header className="bg-gray-800 md:sticky top-0 z-10">
             <ul>
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="title-font font-medium text-white mb-4 md:mb-0">
                        <li onClick={ () => props.setPage("About")} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            About Me
                        </li>
                        <li onClick={ () => props.setPage("Projects")} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            Projects
                        </li>
                        <li onClick={ () => props.setPage("Skills")} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            Skills
                        </li>
                        <li onClick={ () => props.setPage("Contact")} className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0 cursor-pointer">
                            Contact Me
            {/* <ArrowRightIcon className="w-4 h-4 ml-1" /> */}
                        </li>
                        <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0" onClick={toggleTheme}>Toggle Theme</button>
                    </div>
                </div>
            </ul>
        </header>








        // <nav>
        //     <h2>My Portfolio</h2>
        //     <ul>
        //         <li onClick={ () => props.setPage("Home")}>Home</li>
        //         <li onClick={ () => props.setPage("About")}>About</li>
        //         <li onClick={ () => props.setPage("Contact")}>Contact</li>
        //     </ul>
        // </nav>
     
    )
}

export default Navbar