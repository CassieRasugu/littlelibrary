import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FeaturedBooks.css'; // Create and import a new CSS file if needed

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchFeaturedBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=4');
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching featured books: ", error);
      }
    };

    fetchFeaturedBooks();
  }, []);

  return (
    <div className='featured-books'>
      <h3 className='featured-title'>Featured Products</h3>
      <div className='booklist-content grid'>
        {books.map(book => (
          <div key={book.id} className='book-item flex flex-c'>
            <div className='book-item-img'>
              <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
            </div>
            <div className='book-item-info'>
              <div className='book-item-info-item title fw-7 fs-18'>
                {book.volumeInfo.title}
              </div>
              <div className='book-item-info-item author fs-15'>
                Author: {book.volumeInfo.authors?.join(', ')}
              </div>
              <div className='book-item-info-item publish-year fs-15'>
                Published: {book.volumeInfo.publishedDate}
              </div>
              <div className='book-item-info-item price fs-15'>
                Price: Ksh{(Math.random() * (3000 - 1000) + 1000).toFixed(2)} {/* Random price between $10 and $30 */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBooks;
