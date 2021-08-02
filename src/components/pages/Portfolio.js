import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Capture from "../../img/Capture.PNG";
import artinerary from "../../img/artinerary.PNG";
import mood from "../../img/mood.PNG";
import rock from "../../img/rock.PNG";
import weather from "../../img/weather.PNG";
import taskinator from "../../img/taskinator.PNG";
import passgen from "../../img/passgen.PNG";



const Portfolio = () => (

  <section id="challenges">



    <div className="container">
      <div className="row">
        <div className="col-med">

        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-med">
         
          <div>
            <article>Run Buddy</article>
            <a href="https://github.com/vmcguire6377/runbuddy" >
            <a className="text-center" href="https://github.com/vmcguire6377.io/">Github Link</a>
            <br></br>
              <img src={Capture} width="100" height="100" alt="project example"
                className="challenges" /></a>
          </div>
        </div>
      </div>
      </div>
      <br>
      </br>
      <div className="container">
        <div className="row">
          <div className="col-med">
            <article>Mood Boost</article>
            <a href="https://kwerrell73.github.io/mood-boost" >
            <a className="text-center" href="https://github.com/Kwerrell73/mood-boost">Github Link</a>
            <br></br>
              <img src={mood} width="100" height="100" alt="project example"
                className="challenges" /></a>
          </div>
        </div>
      </div>

      <br>
      </br>
      <div className="container">
        <div className="row">
          <div className="col-med">
            <article>Artinerary</article>
            <a href="https://hidden-reaches-45405.herokuapp.com/" >
            <a className="text-center" href="https://github.com/PacSmack/ArtInerary">Github Link</a>
            <br></br>
              <img src={artinerary} width="100" height="100" alt="project example"
                className="challenges" /></a>
          </div>
        </div>
      </div>

      <br>
      </br>
      <div className="container">
        <div className="row">
          <div className="col-med">
            <article>Rock Quiz</article>
            <a href="https://vmcguire6377.github.io/codingquiz" >
            <a className="text-center" href="https://github.com/vmcguire6377/codingquiz">Github Link</a>
            <br></br>
              <img src={rock} width="100" height="100" alt="project example"
                className="challenges" /></a>
          </div>
        </div>
      </div>
      <br>
      </br>
      <div className="container">
        <div className="row">
          <div className="col-med">
            <article>Weather Dashboard</article>
            <a href="https://vmcguire6377.github.io/weatherdashboard" >
            <a href="https://github.com/vmcguire6377/weatherdashboard">Github Link</a>
            <br></br>
              <img src={weather} width="100" height="100" alt="project example"
                className="challenges" /></a>
          </div>
        </div>
      </div>
      <br>
      </br>
      <div className="container">
        <div className="row">
          <div className="col-med">
            <article>Taskinator</article>
            <a href="https://vmcguire6377.github.io/taskinator" >
            <a href="https://github.com/vmcguire6377/taskinator">Github Link</a>
            <br></br>
              <img src={taskinator} width="100" height="100" alt="project example"
                className="challenges" /></a>
          </div>
        </div>
      </div>
      <br>
      </br>
      <div className="container">
        <div className="row">
          <div className="col-med">
            <article>Password Generator</article>
            <a href="https://vmcguire6377.github.io/passwordgenerator" >
              <a href="https://github.com/vmcguire6377/passwordgenerator">Github Link</a>
              <br></br>
              <img src={passgen} width="100" height="100" alt="project example"
                className="challenges" /></a>
          </div>
        </div>
      </div>
</section>
      );


      export default Portfolio;