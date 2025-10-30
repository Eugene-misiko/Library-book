import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About(){
    return(
        <>
        <Navbar />
        <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 p-2 text-white h-screen ">
        <h1 className="p-16 text-center">Hello Fiend</h1>
         <p className="text-white text-center hover:scale-105 transition-transform duration-300 shadow-lg bg-black rounded p-2 m-4 max-w-md w-full mx-auto hover:bg-white hover:text-black">
           Welcome to our website! We are dedicated to providing users with a seamless and engaging online experience.
             
            Our platform delivers high-quality content, helpful resources, and interactive features tailored to
            meet the needs of our diverse audience. With a focus on innovation,
             accessibility, and user satisfaction, we strive to create a space where visitors 
              can easily find the information they need, connect with like-minded individuals, and explore new ideas. 
              Whether you are here to learn, explore, or engage, our mission is to make your online journey both enjoyable and meaningful.
        </p>
        </div>
        <Footer/>
        </>
    )
}
export default About