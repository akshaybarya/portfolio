import './scrollTotop.css';

import React, {
  useEffect,
  useState,
} from 'react';

const ScrollToTop = () => {
  const [active, setActive] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const scroll = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  if(!active){
    return null;
  }

  return (
    <span className='stt321Conatainer circle' onClick={scroll}>
      <i className="fa-solid fa-angle-up stt321Icon"></i>
    </span>
  )
}

export default ScrollToTop;