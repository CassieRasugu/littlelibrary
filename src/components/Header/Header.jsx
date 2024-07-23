import React, { useState, useEffect } from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import FeaturedBooks from "../FeaturedBooks/FeaturedBooks";
import { useGlobalContext } from '../../context.';

const Header = () => {
  const { searchTerm } = useGlobalContext();
  const [showFeatured, setShowFeatured] = useState(true);

  useEffect(() => {
    if (searchTerm && searchTerm !== "romance") {
      setShowFeatured(false);
    } else {
      setShowFeatured(true);
    }
  }, [searchTerm]);

  return (
    <div className='holder'>
      <header className='header'>
        <Navbar />
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Welcome to Little Library</h2><br />
          <p className='header-text fs-18 fw-3'>Let's find you a book!</p>
          <SearchForm />
        </div>
        {showFeatured && <FeaturedBooks />}
      </header>
    </div>
  );
}

export default Header;
