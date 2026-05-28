import "../App.css";
import hero from "../assets/hero.png";
import reactLogo from "../assets/react.svg";

const About = () => {
  return (
    <div>
      <div>About</div>

      <img src="/favicon.svg" alt="favicon" width="80" />

      <img
        src={reactLogo}
        alt="react logo"
        width="80"
      />

      <img
        src={hero}
        alt="hero"
        width="200"
      />
    </div>
  );
};

export default About;