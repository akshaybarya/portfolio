import './intro.css';

import React from 'react';

import ethereum from '../../assests/icons/ethereum.svg';
import express from '../../assests/icons/express.svg';
import gh_pages from '../../assests/icons/gh-pages.svg';
import git from '../../assests/icons/git.svg';
import heroku from '../../assests/icons/heriku.svg';
import mongodb from '../../assests/icons/mongodb.svg';
import netlify from '../../assests/icons/netlify.svg';
import next from '../../assests/icons/next.svg';
import npm from '../../assests/icons/npm.svg';
import redux from '../../assests/icons/redux.svg';
import solidty from '../../assests/icons/solidty.svg';
import typeScript from '../../assests/icons/typescript.svg';
import dataScience from '../../assests/images/data_science.svg';
import fullStack from '../../assests/images/fullstack.svg';

const Intro = () => {
  return (
    <div className='int111Container valign-wrapper'>
      <h1 className='h619Title'>What I Do?</h1>

      <div className="int111InnerContainer valign-wrapper">
        <div className="int111Item int111DesktopImg int111ImageContainer">
          <img src={fullStack} alt="" className='responsive-img' />
        </div>


        <div className="int111Item flex left-align">
          <h2 className='int111ItemTitle'>Full Stack Development</h2>

          <div className="int111IconContainer">
          <i className="fa-brands fa-html5 int111Icons" style={{color: 'rgb(227, 79, 38)'}}></i>
          <i className="fa-brands fa-css3-alt int111Icons" style={{color: 'rgb(21, 114, 182)'}}></i>
          <i className="fa-brands fa-sass int111Icons" style={{color: 'rgb(204, 102, 153)'}}></i>
          <i className="fa-brands fa-js-square int111Icons" style={{color: 'rgb(247, 223, 30)'}}></i>
          <img alt="" src={typeScript} className='int111ImgIcons'/>
          <i className="fa-brands fa-react int111Icons" style={{color: 'rgb(97, 218, 251)'}}></i>
          <img alt="" src={redux} className='int111ImgIcons'/>
          <i className="fa-brands fa-node-js int111Icons" style={{color: 'rgb(51, 153, 51)'}}></i>
          <img alt="" src={express} className='int111ImgIcons'/>
          <img alt="" src={mongodb} className='int111ImgIcons'/>
          </div>

          <p className='int111ItemDescription'>
            ⚡ Building resposive website front end using React-Redux
          </p>
          <p className='int111ItemDescription'>
            ⚡ Creating application backend in Node & Express
          </p>
          <p className='int111ItemDescription'>
            ⚡ Experience of working with multiple Databases & deploying applications to Github, Heroku ..
          </p>
        </div>

        <div className="int111Item int111MobileImg int111ImageContainer">
          <img src={fullStack} alt="" className='responsive-img' />
        </div>
      </div>

      <div className="int111InnerContainer valign-wrapper" id='temp'>
        <div className="int111Item flex left-align">
          <h2 className='int111ItemTitle'>Blockchain Development</h2>

          <div className="int111IconContainer valign-wrapper">
          <i className="fa-solid fa-link int111Icons" style={{color: 'rgb(21, 114, 182)'}} ></i>
          <img alt="" src={ethereum} className='int111ImgIcons'/>
          <img alt="" src={solidty} className='int111ImgIcons'/>
          <img alt="" src={next} className='int111ImgIcons'/>
          <img alt="" src={npm} className='int111ImgIcons'/>
          <img alt="" src={git} className='int111ImgIcons'/>
          <img alt="" src={gh_pages} className='int111ImgIcons'/>
          <img alt="" src={netlify} className='int111ImgIcons'/>
          <img alt="" src={heroku} className='int111ImgIcons'/>
          </div>

          <p className='int111ItemDescription'>
            ⚡ Developing highly scalable production ready Blockchain Applications
          </p>
          <p className='int111ItemDescription'>
            ⚡ Experience of working with Ethereum & Solidty
          </p>
          <p className='int111ItemDescription'>
            ⚡ Deploying application on Github, Heroku, Vercel & Netlify.
          </p>
        </div>

        <div className="int111Item int111ImageContainer">
          <img src={dataScience} alt="" className='responsive-img' />
        </div>
      </div>
    </div>
  )
}

export default Intro;