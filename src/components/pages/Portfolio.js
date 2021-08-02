import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import capture from "../../assets/capture.PNG";
import artinerary from "../../assets/artinerary.PNG";
import mood from "../../assets/mood.PNG";
import rock from "../../assets/rock.PNG";
import weather from "../../assets/weather.PNG";
import taskinator from "../../assets/taskinator.PNG";
import passgen from "../../assets/passgen.PNG";



function Portfolio(props) {
  const currentCategory = {
    name: "portfolio",
    description:
      "Photos of recent project works that serve as links.",
  };
  return (
    <section>
    <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
    <p>{currentCategory.name}</p>
    <div>
    <article>Run Buddy</article>
      <a href="https://vmcguire6377.github.io/runbuddy" >
      <img src={capture} width="100" height="100" alt="project example"
      className="img-thumbnail mx-1" /></a>
      
      <br>
      </br>
      <article>Artinerary</article>
      <a href="https://hidden-reaches-45405.herokuapp.com/" >
      <img src={artinerary} width="100" height="100" alt="project example"
      className="img-thumbnail mx-1" /></a>

      <br>
      </br>
      <article>Mood Boost</article>
      <a href="https://kwerrell73.github.io/mood-boost" >
      <img src={mood} width="100" height="100" alt="project example"
      className="img-thumbnail mx-1" /></a>

      <br>
      </br>
      <article>Rock Quiz</article>
      <a href="https://vmcguire6377.github.io/codingquiz" >
      <img src={rock} width="100" height="100" alt="project example"
      className="img-thumbnail mx-1" /></a>

      <br>
      </br>
      <article>Weather Dashboard</article>
      <a href="https://vmcguire6377.github.io/weatherdashboard" >
      <img src={weather} width="100" height="100" alt="project example"
      className="img-thumbnail mx-1" /></a>

      <br>
      </br>
      <article>Taskinator</article>
      <a href="https://vmcguire6377.github.io/taskinator" >
      <img src={taskinator} width="100" height="100" alt="project example"
      className="img-thumbnail mx-1" /></a>

      <br>
      </br>
      <article>Password Generator</article>
      <a href="https://vmcguire6377.github.io/passwordgenerator" >
      <img src={passgen} width="100" height="100" alt="project example"
      className="img-thumbnail mx-1" /></a>
</div>
  </section>
);
}

export default Portfolio;