import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Books() {
  const [books, setBooks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editRating, setEditRating] = useState("");

 
  const fetchBooks = () => {
    axios
      .get("https://gutendex.com/books/?page=1")
      .then((res) => {
       
        const mappedBooks = res.data.results.map((book, index) => ({
          id: book.id,
          title: book.title,
          rating: Math.floor(Math.random() * 5) + 1, 
        }));
        setBooks(mappedBooks);
      })
      .catch((err) => console.error("Error fetching books:", err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleEditClick = (book) => {
    setEditingId(book.id);
    setEditTitle(book.title);
    setEditRating(book.rating);
  };

  const handleSave = (id) => {
    setBooks(
      books.map((b) =>
        b.id === id ? { ...b, title: editTitle, rating: editRating } : b
      )
    );
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setEditTitle("");
    setEditRating("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      setBooks(books.filter((b) => b.id !== id));
    }
  };

  return (
    <>
      <Navbar />

    <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 min-h-screen p-6 text-white flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl mb-6 text-center">Books List</h1>
        <table className="w-full border border-white table-auto text-center">
          <thead>
            <tr className="border-b border-white">
            <th className="p-2">ID</th>
             <th className="p-2">Title</th>
            <th className="p-2">Rating</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4">No books available</td>
              </tr>
            )}
            {books.map((book) => (
              <tr key={book.id} className="border-b border-white">
                <td className="p-2">{book.id}</td>
                {editingId === book.id ? (
                  <>
                    <td className="p-2">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="text-black px-2 py-1 rounded w-full"
                      />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          min="1"
                          max="5"
                          value={editRating}
                          onChange={(e) => setEditRating(e.target.value)}
                          className="text-black px-2 py-1 rounded w-full"
                        />
                      </td>
                      <td className="p-2 flex justify-center gap-2">
                        <button
                          onClick={() => handleSave(book.id)}
                          className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancel}
                          className="bg-gray-500 hover:bg-gray-600 px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="p-2">{book.title}</td>
                      <td className="p-2">{book.rating}</td>
                      <td className="p-2 flex justify-center gap-2">
                        <button
                          onClick={() => handleEditClick(book)}
                          className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
                        >
                          Edit
                      </button>
                     <button
                          onClick={() => handleDelete(book.id)}
                          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Books;
