import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact(){
    return (
        <>
        <Navbar />
      <section className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 p-2 text-white h-screen " >
        <div className="  justify-center items-center 
        space-y-4   bg-blue-500 p-3 text-center m-30
        rounded-lg mt-20 shadow-lg  max-w-md w-full mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
                    <form action="submit" >
                <input type="text" className=" p-2 m-4 rounded text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-80" placeholder="First Name"/><br />
                <input type="text" className=" p-2 m-4 rounded text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-80" placeholder="Lats Name"/><br />
                <input type="text" className=" p-2 m-4 rounded text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-80" placeholder="Phone"/><br />
                <input type="text" className=" p-2 m-4 rounded text-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-80" placeholder="Email"/><br />
                <button className="bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">Submit</button>

         </form>
        </div>
        
     </section>

     <Footer />
        </>
    )
}
export default Contact