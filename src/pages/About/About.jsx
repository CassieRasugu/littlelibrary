import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About LittleLibrary</h2>
            <p className='fs-17'>LittleLibrary is a premier online bookstore dedicated exclusively to book lovers. It offers a vast collection of titles across various genres, including fiction, non-fiction, science fiction, fantasy, romance, and more. Whether you're looking for the latest bestsellers or timeless classics, Booksite has something for every reader. </p>
            <p className='fs-17'>The platform is designed to provide an easy and enjoyable shopping experience, with detailed book descriptions, customer reviews, and personalized recommendations to help you find your next great read.

</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
