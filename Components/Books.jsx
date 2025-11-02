import React, { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";


function Books() {
  const MyImage = './src/assets/boo.jpeg'
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
  const fetchBooks = async () => {
    if (!query.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError("");
    setData(null);

    try {
      const url = `${BASE_URL}?q=${query}&filter=free-ebooks&key=${API_KEY}`;
      console.log("Fetching URL:", url);
      const response = await axios.get(url);
                   
      if (response.data.items) {
        setData(response.data);
      } else {
        setError("No books found.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch books. Check your API key or connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchBooks();
  };

  return (
    <>
      <Navbar />
    <main className="bg-gradient-to-r from-purple-400 via-purple-500 to-cyan-500">
      <h1 className="text-center p-4 text-white font-bold">Get experince with the books you are interested in through our website
        
      </h1>
      <h4 className="text-center text-white ">Here a sample of a book you might be interested in</h4>
    <div className="border border-gray-200 mx-auto rounded-lg shadow-sm p-4 hover:shadow-lg transition w-56 m-3">
      <img src={MyImage} alt="Book Cover" className="w-50 h-50 rounded-md mb-4" />
      <h2 className="text-lg font-semibold mb-2">Book Title: <span className="text-golden-brown">NEGOTIATE</span> <br /> <span className="ml-23">LIKE A CEO</span> </h2>
      <p className="text-white mb-2">Author: JOTHAM S. STEIN</p>
    </div>
      <form onSubmit={handleSubmit} className="min-h-screen bg-brown-200 py-10 px-4">
        <h5 className="text-center mb-2">You can search more books on our library</h5>
        <h2 className="text-3xl font-bold text-center mb-5 text-white">Library Books</h2>
        <h3 className="font-bold text-center m-2 animate-pulse">FIND ME!</h3>

        <div className="flex justify-center gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter the book name..."
            className="flex p-3  rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 
            py-2 rounded-lg transition">
            Search
          </button>
          
        </div>
      {loading && <p className="text-lg animate-pulse text-center text-grey">Fetching books...</p>} 
      {error && <p className="text-center text-red-600">{error}</p>}
      

      {data?.items && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-6 bg-gray-50 mt-2 bg-purple-500 rounded-xl">
          {data.items.map((book) => (
         <div key={book.id} className=" flex flex-col items-center
           rounded-xl shadow-sm bg-white hover:shadow-md mt-4
          transition-shadow duration-300 p-4 bg-purple-500 ">
           <h3 className="font-bold ">{book.volumeInfo.title}</h3>
              <p className="text-sm text-blue-500 italic text-center mb-2 ">{book.volumeInfo.authors?.join(", ")}</p>
              {book.volumeInfo.imageLinks?.thumbnail && (
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                  className="w-50 h-50 "
                />
              )}
             
            </div>
          ))}
        </div>
    ) } 
      </form>
</main>
      <Footer />
    </>
  );
}

export default Books;