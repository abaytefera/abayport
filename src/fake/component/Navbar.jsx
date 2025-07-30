import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [ClickMeanu,setClickMeanu]=useState(false)
  console.log(ClickMeanu);

  return (
    <nav className="flex justify-between box-content  items-center  p-6 relative">
      <h1 className="text-2xl  flex items-center gap-[5px] font-serif italic"> <span className="">Abay</span>. <span className="sm:hidden cursor-pointer"  onClick={()=>{ setClickMeanu(pre=>!pre)}} >    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon></span></h1>
  
      <ul className={`flex space-x-8  text-sm font-medium ${ClickMeanu ? "max-sm:flex max-sm:flex-col max-sm:translate-x-[0px]  max-sm:top-[60px] max-sm:z-600 max-sm:-left-[32px] max-sm:absolute max-sm:bg-black max-sm:h-screen max-sm:w-[200px] max-sm:text-white max-sm:rounded-r-[10px] max-sm:gap-[20px] max-sm:item-center max-sm:pt-[40px] max-sm:transition max-sm:duration-300 max-sm:ease-linear ":"max-sm:flex max-sm:flex-col max-sm:-translate-x-[190px]  max-sm:top-[60px] max-sm:z-600 max-sm:-left-[50px] max-sm:absolute max-sm:bg-black max-sm:h-screen max-sm:w-[200px] max-sm:text-white max-sm:rounded-r-[10px] max-sm:gap-[20px] max-sm:item-center max-sm:pt-[40px] max-sm:transition max-sm:duration-300 max-sm:ease-linear " } `}>

       <Link to="/heropage"  > <li className="sm:hover:text-sky-500 sm:transition sm:duration-300 sm:ease-linear sm:hover:font-bold cursor-pointer max-sm:transition max-sm:ease-linear max-sm:duration-600 max-sm:hover:bg-white max-sm:hover:text-black max-sm:hover:font-bold max-sm:w-[200px]  max-sm:py-[20px] max-sm:inline-block">Home</li></Link>
       <Link to="/workpage" > <li className="sm:hover:text-sky-500 sm:transition sm:duration-300 sm:ease-linear sm:hover:font-bold cursor-pointer max-sm:transition max-sm:ease-linear max-sm:duration-600  max-sm:hover:bg-white max-sm:hover:text-black max-sm:hover:font-bold max-sm:w-[200px]  max-sm:py-[20px] max-sm:inline-block"> Works</li></Link>
      <Link to="/aboutpage"  >  <li className=" sm:hover:text-sky-500 sm:transition sm:duration-300 sm:ease-linear sm:hover:font-bold cursor-pointer max-sm:transition max-sm:ease-linear max-sm:duration-600 max-sm:hover:bg-white max-sm:hover:text-black max-sm:hover:font-bold max-sm:w-[200px] max-sm:py-[20px] max-sm:inline-block"> About</li></Link>
      <Link to="/servicepage"  >  <li className="sm:hover:text-sky-500 sm:transition sm:duration-300 sm:ease-linear sm:hover:font-bold  cursor-pointer max-sm:transition max-sm:ease-linear max-sm:duration-600 max-sm:hover:bg-white max-sm:hover:text-black max-sm:hover:font-bold max-sm:w-[200px] max-sm:py-[20px] max-sm:inline-block"> Services</li></Link>

      </ul>
      <Link to="/contactpage"><button className="bg-gray-500 text-black font-bold px-5 py-2 rounded-full transition hover:bg-black hover:text-white cursor-pointer duration-300 ease-linear  shawdow-md">Contact</button></Link>
    </nav>
  );
};

export default Navbar;
