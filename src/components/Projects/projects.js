import "./projects.scss";
import urlogo from "../../assets/images/urlogo.webp";

function Projects() {
  return (
    <div className="projects-container">
      <div className="card">
        <img className="card-img" src={urlogo} alt="Card image cap" />
        <h1>URL Shortener</h1>
        <p>
          A simple URL shortener using React for the frontend and AWS and Javascript for the backend.
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
          src="https://via.placeholder.com/150"
          alt="Card image cap"
        />
        <h1>Coming Soon!</h1>
        <p>Work in progress</p>

        <button className="card-button">Open project</button>
      </div>
    </div>
  );
}

export default Projects;
