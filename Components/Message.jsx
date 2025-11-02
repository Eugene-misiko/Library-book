import Navbar from "./Navbar"
import Footer from "./Footer"


function Message() {

    return (
        <>
        <Navbar />
            <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen p-6 text-white flex flex-col items-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Got a Question? We're All Ears!</h2>
                 <p className="text-white mb-4">
    Drop your message below and we'll get back to you super fast. We love hearing your thoughts!
  </p>
    

                <section className="m-2 flex flex-col space-y-4 my-auto">
               <textarea 
  name="text" 
  id="text" 
  placeholder="Type something..." 
  className="w-100 max-w-lg h-40 p-4 mb-3  bg-gray-500 border-2 border-gray-300 rounded-lg text-white text-base focus:outline-none  focus:border-green-500 focus:ring-2 focus:ring-green-200  placeholder-gray-400">
</textarea>
<p className="text-white text-sm mt-3 mx-auto">Your info stays private. Promise.</p>
<button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-300 w-24  mx-auto">
  Submit
</button>
</section>
        </div>          
        <Footer />
        </>
    )
}

export default Message