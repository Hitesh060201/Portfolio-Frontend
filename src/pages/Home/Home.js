import React from 'react';
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import Typewriter from 'typewriter-effect';
import { useTheme } from '../../Content/ThemeContent';
import Resume from '../../assets/docs/Hitesh Kumar Misra CV21.pdf';
import './Home.css';

const Home = () => {
  const [theme,setTheme]=useTheme()
  //handle theme
  const handleTheme =()=>{
    setTheme((prevState) => (prevState ==="light"?"dark":"light"));
  };
  return (
    <div className="container-fluid home-container "id="home">
      
      <div className="theme-btn" onClick={handleTheme}>
        {theme === 'light'?(<BsFillMoonStarsFill size={30} color='white'/>):(<BsSunFill size={30} color='white'/>)}
      </div>

      <div className="container home-content">
        <Fade  right>
        <h2>Hi👋🏻 I'm a</h2>
        <h1>
        <Typewriter
          options={{
            strings: ['FullStack Developer!', 'Mern Stack Developer!' ,'Android App Developer!','UI/UX Designer!'],
            autoStart: true,
            loop: true,
          }}
          />
        </h1>
          </Fade>
        
        <div className="home-buttons">
          
          <Wobble>
            <a className="btn btn-hire b1"  
            href="https://api.whatsapp.com/send?phone=8457879345"
            rel='noreferrer'
            target='_blank'>Hire Me</a>
         
          </Wobble>
          
          
          <Wobble >
          <a className="btn btn-cv b2" href={Resume} download="HITESH KUMAR MISRA CV21.pdf">My Resume</a>
          </Wobble>
          
         
          <Wobble >
          <a className="btn btn-git b3" href="https://github.com/Hitesh060201">My GitHub</a>
          </Wobble>
          
          
        </div>
        
      </div>
      
        </div>
  )
}

export default Home