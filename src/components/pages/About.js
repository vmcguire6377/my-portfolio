import React from "react";
import "../../App.css";
import vanessaProfile from "../../img/vanessaProfile.jpg";

const About = () => (
  <section className="content">
    <section className="hero">
      <div id="About-Me" className="container">
        <div className="row">
          <div className="col-med">

           
          </div>
        
  <div className="col-med about-me-desc">

    <h1>About Me
    <br></br>
    Vanessa McGuire
    </h1>
    <img src={vanessaProfile} className="my-5" style={{ width: "13%", height: "20%" }} className="float-left" alt="profile pic" />

    

      <p className="desc">
     
<br></br>
    Thank you for visiting my portfolio!
     I am a full stack developer with training in the MERN stack.
     In 2020 I also earned a CyberSecurity Analyst certificate through IBM.
     I am eager to advance my career in full stack development, and also have experience
     in HTML, CSS, GitHub, Responsive Web Design, JavaScript, GraphQL, Ajax, jQuery, Bootstrap,
     Bulma, Object Oriented Programming, Object Relational Mapping, Model View Controller, client
     and server side APIs, jest, Insomnia, MySQL, Sequelize, Cloudinary, and PWAs.
     My favorite activities, besides coding, are cooking, guitar, jogging, and crochet.
    
    </p>
  </div>
  </div>
  </div>
  </section>
  </section>
);

export default About;
