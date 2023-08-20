import { useState } from "react";

export default function ScrollButton({handleClick: func}: {handleClick: ()=>void}) {
    const [visible, setVisible] = useState(true)
    
    const checkVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled <= 300){
        setVisible(true)
      } 
      else if (scrolled > 300){
        setVisible(false)
      }
    };
    
    window.addEventListener('scroll', checkVisible);
    
    return (
      <button className="info-button" onClick={() => func()}
        style={{display: visible ? 'inline' : 'none'}}>?
      </button>
    );
  }