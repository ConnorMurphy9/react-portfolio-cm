import './index.css';
import Navbar from './components/Navbar';
import {useState} from "react";
import About from './components/About';
import Contact from './components/Contact';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Home from "./components/Home";
import React from "react";
// import { motion } from "framer-motion";

function App() {
  const [currentPage, setCurrentPage] = useState("Home")
  function Navigation () {
    if (currentPage === "Home") {
      return <Home/>
    } else if (currentPage === "About") {
      return <About/>
    } else if (currentPage === "Contact") {
      return <Contact/>
    } else if (currentPage === "Projects") {
      return <Projects/>
    } else if (currentPage === "Skills") {
      return <Skills/>
    }
  }
  return (
    <div className="App">
      <header className="App-header">
       <Navbar setPage= {setCurrentPage}/>
       {Navigation()}
      </header>
      <div className="">
        
      </div>
    </div>
  );
}

export default App;
