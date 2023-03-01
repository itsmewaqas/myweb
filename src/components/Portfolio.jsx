import React, { useState, useEffect } from 'react';

function Portfolio() {

  useEffect(() => {
  }, [])

  return (
    <section>
      <div className='portfolioContant' id="portfolioSec">
       <h3>Prtfolio</h3>
       <ul>
        <li><img src={require('../assets/img/portfolio1.jpg')} /> </li>
        <li><img src={require('../assets/img/portfolio2.jpg')} /> </li>
        <li><img src={require('../assets/img/portfolio3.jpg')} /> </li>
        <li><img src={require('../assets/img/portfolio4.jpg')} /> </li>
        <li><img src={require('../assets/img/portfolio5.jpg')} /> </li>
        <li><img src={require('../assets/img/portfolio6.jpg')} /> </li>
       </ul>
      </div>
    </section>
  );
}

export default Portfolio;



