import React from "react";
import   { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
        <div>
        <nav className="  p-5 m-0 flex gap-10 justify-end pr-40 text-center  text-2xl text-white  top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-700 to-purple-700 text-white px-6 py-4 shadow-md">
            <Link to='/' className="">Home</Link>
            <Link to='/about'>About</Link>
                       <Link to='/books'>Books</Link>
            <Link to='/contact'>Contact</Link>
            
         
        </nav>
         </div>
        </>
    )
}
export default Navbar