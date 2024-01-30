import "./index.scss";
import AnimatedLetters from "../AnimatedLetters/animatedletters";

function About() {
  <div className="container about-page">
    <div className="text-zone">
      <h1>
        <AnimatedLetters
          strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
          idx={15}
        />
      </h1>
      <p>
        Passionate front-end developer with a marketing background, eager to
        dive into the dynamic world of tech. Armed with ambition, I seek
        opportunities with established IT companies to harness modern
        technologies and fuel my insatiable drive to learn and excel in the
        field. Let's craft innovative digital experiences together!
      </p>
      <p>i love bash</p>
      <p> 
      </p>
    </div>
  </div>;
}

export default About;
