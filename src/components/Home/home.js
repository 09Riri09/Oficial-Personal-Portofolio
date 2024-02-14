import { Link } from 'react-router-dom';
import './home.scss';
import { useState , useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/animatedletters';
import Logo from './Logo/logo.js';
import Loader from 'react-loaders';

function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = [' ', 'R', 'a', 'r', 'e', 's' , ','];
  const jobArray = [
    'F',
    'r',
    'o',
    'n',
    't',
    '-',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <>
    <div className="home-page">
      <div className="text-zone">
        <h1>
          
          <span className={letterClass}>H</span>
          <span className={letterClass} >i,</span>
          <br />
          <span className={letterClass}>I</span>
            <span className={letterClass}>'m</span>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={17}
          />
        </h1>
        <h2>React / Javascript / SASS / HTML </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
    <Loader type = "ball-scale-ripple-multiple"/>
    </>
  );
}

export default Home;
