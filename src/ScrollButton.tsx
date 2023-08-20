import { useState } from "react";

export default function ScrollButton() {
  
    const [visible, setVisible] = useState(false)
    
    const checkVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300){
        setVisible(true)
      } 
      else if (scrolled <= 300){
        setVisible(false)
      }
    };
    
    const scrollToTop = () =>{
      window.scrollTo({
        top: 0, 
        behavior: 'instant'
      });
    };
    
    window.addEventListener('scroll', checkVisible);
    
    return (
      <button onClick={scrollToTop} className="scroll-button"
        style={{display: visible ? 'inline' : 'none'}}>▲
      </button>
    );
  }