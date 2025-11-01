import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About(){
    return(
        <>
        <Navbar />
        <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen p-6 text-white flex flex-col items-center">
     <section className="bg-gray-50 py-20 rounded shadow-lg bg-purple-300 hover:bg-white animate-pulse">
  <div className="container mx-auto px-6 md:px-12  ">
    <div className="max-w-3xl mx-auto text-center ">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Motivation</h2>
      <p className="text-lg text-gray-600 leading-relaxed ">
        Every book we create is inspired by the desire to ignite curiosity and empower readers. 
        We believe that stories are more than words on a page — they are windows into new worlds, 
        bridges to understanding, and sparks that inspire action. Our mission is to share knowledge 
        and creativity that resonates, enlightens, and transforms.
      </p>
    </div>
  </div>
</section>
</div>
        <Footer/>
        </>
    )
}
export default About