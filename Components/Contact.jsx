import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";


function Contact(){
    return (
        <>
        <Navbar />
      <section className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen p-6 text-white flex flex-col items-center " >
        
            <section className="bg-gray-50 py-16 rounded-xl m-0">
  <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
   
    <div className="text-center mb-12">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h2>
      <p className="text-gray-600 text-lg">Have questions or need assistance? Reach out to us through any of the methods below.</p>
    </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 class="text-xl font-semibold text-gray-800 mb-2">Email</h3>
        <p className="text-gray-600 mb-2">Send us an email and we'll respond as soon as possible.</p>
        <a href="" className="text-blue-500 hover:underline font-medium">eugene12@gmail.com</a>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
        <p className="text-gray-600 mb-2">Call us for immediate assistance during business hours.</p>
        <a className="text-blue-500 hover:underline font-medium">+254(0)7 12 342 456</a>
      </div>

     
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
        <p className="text-gray-600">123 Main Street<br/>City, State, ZIP</p>
      </div>

      
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Business Hours</h3>    
         <p className="text-gray-600">Monday - Friday: 9 AM - 5 PM</p>
      </div>
    </div>

   
    <div class="text-center mt-12">
      <Link to= '/message' className="inline-block bg-blue-500 text-white px-8 py-3 rounded-xl font-semibold text-lg hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
        Send Us a Message
      </Link>
    </div>
  </div>
</section>  
 </section>

     <Footer />
        </>
    )
}
export default Contact