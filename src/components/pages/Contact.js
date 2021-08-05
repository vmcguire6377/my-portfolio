import React, { useState } from "react";
import { emailValidation } from '../../utils/helpers';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';
import stack from '../../img/stack.png';
function Contacts() {
const [formsState, setFormsState] = useState({ name: '', email: '', message: '' });
const [errMsg, setErrMsg] = useState('');
const { name, email, message } = formsState;

function Update(evt) {
  if (evt.target.name === 'email') {
    const isValid = emailValidation(evt.target.value);
    if (!isValid) {
      setErrMsg('This is not a valid email address. Please try again.');
    } else {
      setErrMsg('');
    }
  } else {
    if (!evt.target.value.length) {
      setErrMsg(`${evt.target.name} is required!`);
    } else {
      setErrMsg('');
    }
  }
  if (!errMsg) {
    setFormsState({ ...formsState, [evt.target.name]: evt.target.value })
  }
}
function updateSubmit(evt) {
  evt.preventDefault();
}
return (

<section className="container2">
    <h2>Contact Me</h2>
    <br></br>
    <form className="justify-content-center"
    id="contact-page">
      <div className="my-5">
        <label htmlFor="name">Your Name: </label>
        <input className="forms-monitor"
        type="text" name="name"
        defaultValue={name} onBlur={Update} />
      </div>
      

      <div className="my-5">
        <label htmlFor="name">Email Address: </label>
        <input className="forms-monitor"
        type="text" name="email"
        defaultValue={email} onBlur={Update} />
      </div>
      

      <div className="my-5">
        <label htmlFor="message">Message: </label> <br></br>
        <textarea className="formsMonitor" name="message"
        defaultValue={message} onBlur={Update} rows="7" />
      </div>
{errMsg && (
  <div>
    <p className="err-text">{errMsg}</p>
  </div>
)}

<div className="my-5 mb-5" >
  <button className="btn btn-outline-light"
  type="submit"
  onSubmit={updateSubmit}>Submit</button>
</div>

</form>



<div className="container2">
  

  <br></br>
      <article>Please visit my pages on LinkedIn, GitHub, and Stack Overflow via the icons.➡️</article>
      <br></br>
      <br></br>
        <a href="https://linkedin.com/in/vanessa-mcguire-70927a1ba">
          <a className="text-center" href="https://linkedin.com/in/vanessa-mcguire-70927a1ba"></a>
            <img src={linkedin} style= {{width: "10%", height: "16%" }} className="challenges2" alt="linkedin"></img>

</a>


        <a href="https://github.com/vmcguire6377/">
          <a className="text-center" href="https://github.com/vmcguire6377/"></a>
            <img src={github} style= {{width: "10%", height: "16%" }}  className="challenges2" alt="github"></img>
            </a>

            <a href="https://stackexchange.com/users/22365333/vanessa-mcguire">
          <a className="text-center" href="https://stackexchange.com/users/22365333/vanessa-mcguire"></a>
            <img src={stack} style= {{width: "10%", height: "16%" }}  className="challenges2" alt="stack"></img>
            </a>
</div>

</section>



);
}
    

    export default Contacts;
