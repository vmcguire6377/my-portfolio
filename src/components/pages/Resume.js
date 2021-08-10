import React from "react";
import resume from "../../img/resume.png"
import form_1 from "../../img/form_1.png"

const Resume = () => (
  
  


<section id="resume" className="resume">
  <h2>Resume</h2>
    <br></br>
    
    <h2>Technical Proficiencies:</h2>
    <h3> HTML, CSS, GitHub, 
    Responsive Web Design, JavaScript, GraphQL, 
    Ajax, jQuery, Bootstrap, Bulma, Object Oriented
     Programming, Object Relational Mapping, Model 
     View Controller, client and server side APIs, 
     jest, Insomnia, MySQL, Sequelize, Cloudinary, 
     and PWAs.
     <br></br>
     Please click the icon below to view or download my resume.
     </h3>
  
  <br></br>
  <a href="https://drive.google.com/file/d/1b4VoZSEQccyV_Aphv_FWDttNJBwldh0e/view?usp=sharing">
  <img src={resume} style= {{width: "15%", height: "8%" }} alt="resume icon"></img>
  </a>

<h3>Please click the icon below to access class forms.</h3>
  <a href="https://drive.google.com/drive/folders/1dtXlExKC1DHkIQfHe58FKG4LkPbine56?ths=true">
  <img src={forms_1} style= {{width: "15%", height: "8%" }} alt="resume icon"></img>
  </a>
</section>

);
export default Resume;
