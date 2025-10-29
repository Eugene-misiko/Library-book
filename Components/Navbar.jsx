import React from "react";
import   { Link } from "react-router-dom";

function Navbar() {
    return(
        <>
        <div>
        <nav className=" bg-pink-500 p-5 m-0 flex gap-10 justify-end pr-40 text-xl text-white fixed top-0 left-0 w-full z-50">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/books'>Books</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
         </div>
        </>
    )
}
export default Navbar