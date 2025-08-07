

import React from 'react';
import img from '../image/img.png';



function Hero() {
  return (
    <section className="herosection container my-5">
      <div className="row align-items-center">
        
        <div className="col-md-8">
          <h2>
            Hi, I am John,
          </h2>
          <h3 className="mb-3">Creative Technologist</h3>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          </p>
          <a href="#" className="btn btn-danger mt-3">Download Resume</a>
        </div>

        <div className="col-md-4 text-center">
          <img src={img} alt=" " className="img-fluid" />
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
