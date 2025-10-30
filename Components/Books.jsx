import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Books() {
  const [book, setBook] = useState("");
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = import.meta.env.VITE_API_KEY
  const [error, setError] = useState("");
  const BASE_URL = "https://www.googleapis.com/books/v1/volumes";

  const fetchBooks = async () => {
    if(!book.trim()) return;
    setLoading(true);
    setError("");
    setBook(null);

    try {
      const url = `${BASE_URL}?=${book}&appid=${API_KEY}`
      const response = await axios.get(
              url
      );
      setBook(response.data)
    }catch(error) {
      setError("Book not found or API Key is invalid!")
    }finally {
      setLoading(false);
    }
  };


 
  

  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
}

export default Books;
