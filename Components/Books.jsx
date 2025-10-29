import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Books() {
    return(
        <>
        <Navbar />

        <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 p-6 text-white h-[100vh] text-center justify-center ites-center ">
            
            <div className="text-center pt-16 text-xl ">
      <table>
        <thead>
          <tr className="flex gap-40">
            <th>Id</th>
            <th>Title</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody className="flex gap-10 text-center items-center">
          <tr className="flex gap-40">
            <td>1</td>
            <td>Book Title</td>
            <td>2.5</td>
            <td className="flex gap-6">
              <button className="bg-green-500 rounded p-1 m-2">Edit</button>
              <button className="bg-red-500 rounded p-1 m-2">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    <Footer/>
        </>
    )
}
export default Books