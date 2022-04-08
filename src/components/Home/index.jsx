import './home.css';

import React from 'react';

import feelingProud from '../../assests/images/feeling_proud.svg';

const Home = () => {
  return (
    <div className='h619Container valign-wrapper vspace-between'>
      <div className="h619Item h619introSection">
        <h1 className='h619Title'>Akshay Kumar Barya</h1>

        <p className='h619Description'>
          A passionate individual who always thrive to work on end to end products which 
          develop sustainable and scalable social and technical systems to create impact.
        </p>

        <div className="h619ButtonContainer valign-wrapper">
          <a href='https://github.com/akshaybarya' className="h619Button circle valign-wrapper cur-po" style={{backgroundColor: '#000'}}>
            <i className="fa-brands fa-github h619Icon"></i>
          </a>
          <a href='https://www.linkedin.com/in/akshay195/' className="h619Button circle valign-wrapper cur-po" style={{backgroundColor: 'rgb(0, 119, 181)'}}>
            <i className="fa-brands fa-linkedin h619Icon"></i>
          </a>
          <a href='mailto:akshaybarya@gmail.com' className="h619Button circle valign-wrapper cur-po" style={{backgroundColor: 'rgb(209, 72, 54)'}}>
            <i className="fa-brands fa-google h619Icon"></i>
          </a>
          <a href='#' className="h619Button circle valign-wrapper cur-po" style={{backgroundColor: 'rgb(29, 161, 242)'}}>
            <i className="fa-brands fa-twitter h619Icon"></i>
          </a>
          <a href='#' className="h619Button circle valign-wrapper cur-po" style={{backgroundColor: 'rgb(24, 119, 242)'}}>
            <i className="fa-brands fa-facebook-f h619Icon"></i>
          </a>
          <a href='https://www.instagram.com/a_k_s_h_a_y_1_9_5/' className="h619Button circle valign-wrapper cur-po" style={{backgroundColor: 'rgb(228, 64, 95)'}}>
            <i className="fa-brands fa-instagram h619Icon"></i>
          </a>
        </div>

        <a href='https://github.com/akshaybarya/portfolio' className='h619StarmeBtn'>
          ⭐ Star Me On Github
        </a>
      </div>

      <div className="h619Item h619imageSection">
        <img alt="" src={feelingProud} className='responsive-img' />
      </div>
    </div>
  )
}

export default Home