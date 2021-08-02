import React, { useState } from "react";
import { emailValidation } from '../../utils/helpers';

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

<section className="container">
    <h1>Contact Me</h1>
    <form className="justify-content-left"
    id="contact-page">
      <div className="my-5">
        <label htmlFor="name">Your Name: </label>
        <input className="forms-monitor"
        type="text" name="name"
        defaultValue={name} onBlur={Update} />
      </div>
      <br></br>

      <div className="my-5">
        <label htmlFor="name">Email Address: </label>
        <input className="forms-monitor"
        type="text" name="name"
        defaultValue={email} onBlur={Update} />
      </div>
      <br></br>

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

<h3>Linked In Profile: 
  <a href="https://linkedin.com/in/vanessa-mcguire-70927a1ba">https://linkedin.com/in/vanessa-mcguire-70927a1ba</a>
GitHub Profile:
<a href="https://github.com/vmcguire6377">https://github.com/vmcguire6377</a>
</h3>
</section>

);
}
    

    export default Contacts;
