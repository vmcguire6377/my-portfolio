import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Capture from "../../img/Capture.PNG";
import artinerary from "../../img/artinerary.PNG";
import mood from "../../img/mood.PNG";
import budget from "../../img/budget.PNG;
import rock from "../../img/rock.PNG";
//import passgen from "../../img/passgen.PNG";
import taskinator from "../../img/taskinator.PNG";
import weather from "../../img/weather.PNG";

const Portfolio = () => (
  <section id="challenges">
    <div className="row"></div>



    <div className="row">
      <div className="col-sm">
 


        <article>Run Buddy</article>
        <a href="https://github.com/vmcguire6377/runbuddy" >
          <a className="text-center" href="https://github.com/vmcguire6377.io/">Github Link</a>
          <br></br>
          <img src={Capture} alt="project example"
            className="challenges" /></a>



      </div>

      <br>
      </br>

      <div className="col-sm">

        <article>Mood Boost</article>
        <a href="https://kwerrell73.github.io/mood-boost" >
          <a className="text-center" href="https://github.com/Kwerrell73/mood-boost">Github Link</a>
          <br></br>
          <img src={mood} alt="project example"
            className="challenges" /></a>
      </div>


      <br>
      </br>
      <div className="col-sm">

        <article>Artinerary</article>
        <a href="https://hidden-reaches-45405.herokuapp.com/" >
          <a className="text-center" href="https://github.com/PacSmack/ArtInerary">Github Link</a>
          <br></br>
          <img src={artinerary} alt="project example"
            className="challenges" /></a>
      </div>

    </div>
    <br>
    </br>

 <div className="row">
      <div className="col-sm">

        <article>Budget Tracker</article>
        <a href="https://glacial-gorge-03696.herokuapp.com/" >
          <a className="text-center" href="https://github.com/vmcguire6377/budgettracker">Github Link</a>
          <br></br>
          <img src={budget} alt="project example"
            className="challenges" /></a>


      </div>
    <br>
    </br>

    <div className="row">
      <div className="col-sm">

        <article>Rock Quiz</article>
        <a href="https://vmcguire6377.github.io/codingquiz" >
          <a className="text-center" href="https://github.com/vmcguire6377/codingquiz">Github Link</a>
          <br></br>
          <img src={rock} alt="project example"
            className="challenges" /></a>


      </div>

      <br>
      </br>
      
        <div className="col-sm">

       <article>Weather Dashboard</article>
        <a href="https://vmcguire6377.github.io/weatherdashboard">
        <a className="text-center" href="https://github.com/vmcguire6377/weatherdashboard">Github Link</a>
        <br></br>
          <img src={weather} alt="project example"
            className="challenges" /></a>
      </div>

      <br>
      </br>
      <div className="col-sm">

        <article>Taskinator</article>
        <a href="https://vmcguire6377.github.io/taskinator" >
          <a className="text-center" href="https://github.com/vmcguire6377/taskinator">Github Link</a>
          <br></br>
          <img src={taskinator} alt="project example"
            className="challenges" /></a>
      </div>
     
 </div>

</section >
);


export default Portfolio;
