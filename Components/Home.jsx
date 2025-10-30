import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
    return (
        <>
        <Navbar/>
        <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen p-6 text-white flex flex-col items-center">
            <h1 className="p-16 text-3xl text-green-300 underline">Welcome home</h1>

            <Link to='/books'  className="bg-yellow-500 p-4 m-2 rounded text-3xl hover:bg-yellow-300 cursor-pointer shadow-md  ">Get started</Link>
            

        </div>
        <Footer />
        </>
    )
}
export default Home