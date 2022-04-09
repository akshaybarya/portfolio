import './education.css';

import React from 'react';

import codechef from '../../assests/icons/codechef.svg';
import github from '../../assests/icons/github.svg';
import hackkerrank from '../../assests/icons/hackkerrank.svg';
import leetcode from '../../assests/icons/leetcode.svg';
import education from '../../assests/images/education.svg';

const Education = () => {
  return (
    <div id="education" className='h619Container valign-wrapper'>
      <div className="h619Item h619imageSection">
        <img alt="" src={education} className="responsive-img" />
      </div>

      <div className='h619Item h619introSection'>
        <h1 className='h619Title'>Education</h1>

        <h2 className='h619SecondaryTitle'>Basic Qualification and Certifcations</h2>

        <div className="edu098IconContainer">
          <a href='https://www.hackerrank.com/akshaybarya'>
            <img alt="" src={hackkerrank} className='int111ImgIcons' />{''}
          </a>
          <a href='https://leetcode.com/AkshayBarya195/'>
            <img alt="" src={leetcode} className='int111ImgIcons' />{''}
          </a>
          <a href='https://www.codechef.com/users/akshay_195'>
            <img alt="" src={codechef} className='int111ImgIcons' />{''}
          </a>
          <a href='https://github.com/akshaybarya'>
            <img alt="" src={github} className='int111ImgIcons' />{''}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Education;