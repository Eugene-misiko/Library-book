import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
    return (
        <>
        <Navbar/>
        <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen p-6 text-white flex flex-col items-center">
             <h1 class="text-5xl md:text-6xl font-extrabold mb-4 text-center">
    Step into a world where innovation meets simplicity
  </h1>

            <Link to='/books'  className="bg-white text-indigo-700 font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-100 transition my-30">Get started</Link>


       </div>
        <Footer />
        </>
    )
}
export default Home