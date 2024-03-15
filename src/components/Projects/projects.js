import "./projects.scss";
import urlogo from "../../assets/images/urlogo.webp";
import typespeedlogo from "../../assets/images/typespeedlogo.webp";
function Projects() {
  return (
    <div className="projects-container">
      <div className="card">
        <img className="card-img" src={urlogo} alt="Card image cap" />
        <h1>URL Shortener</h1>
        <p>
          A minimalist URL shortener app, where i used the tinyURL API and a custom API to shorten URLs.
              Technologies used: <strong>React</strong>, <strong>Javascript</strong>, <strong>AWS</strong>, <strong>DynamoDB</strong>.
        </p>
        <a
          href="https://url-shortener.raresdev.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="card-button">Open project</button>
        </a>
      </div>
      <div className="card">
        <img
          className="card-img"
          src={typespeedlogo}
          alt="Card image cap"
        />
        <h1>Typing Speed Calculator</h1>
        <p> A simple typing speed calculator. Technologies used:<strong>React</strong>, <strong>Typescript</strong>,<strong>Tailwind.</strong>  </p>
        <a
          href="https://typing-speed-tracker-yey9.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <button className="card-button">Open project</button>
        </a>
    </div>
    </div>
  );
}

export default Projects;
