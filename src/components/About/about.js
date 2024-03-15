import "../Layout/layout.scss";
import './about.scss';
import { useState, useEffect } from "react";
import AnimatedLetters from "../AnimatedLetters/animatedletters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJs,
  faJsSquare,
  faReact,
  faSass,
  faNodeJs, // Adding Node.js icon
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom"; // Importing Link for routing to projects page

import Loader from "react-loaders";

function About() {
  const [letterClass, setLetterClass] = useState("text-animate");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
              idx={15}
            />
          </h1>
          <p>
            Passionate front-end developer with hands-on experience in various technologies,
            eager to dive into the dynamic world of tech. With a solid foundation in <strong>JavaScript</strong>,   
            <strong> TypeScript</strong>, <strong>React</strong>, <strong>Node.js</strong>, <strong>SQL</strong>, 
            <strong>SCSS</strong>, and <strong>HTML</strong>, I'm currently seeking opportunities with established IT companies
            to work with modern technologies and fuel my drive to learn and excel in the field.
          </p>
          
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faSass} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" /> {/* Adding Node.js icon */}
            </div>
          </div>
        </div>
        <Loader type="ball-scale-ripple-multiple" />
      </div>
    </>
  );
}

export default About;
