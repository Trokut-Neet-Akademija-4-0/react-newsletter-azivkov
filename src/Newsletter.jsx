import logoMobile from './assets/illustration-sign-up-mobile.svg';
import './Newsletter.css'
import { useEffect, useState } from 'react'
function Newsletter(){
  const [currentEmail, setCurrentEmail] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [subscription, setSubscription] = useState(false);

  const regex =
  /[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gm;

  function addChangeHandler(e) {
    console.log("registered change =>", e.target.value);
    setCurrentEmail(e.target.value);
    console.log("email:", currentEmail);
  }

  function handleEmailSubmission() {
    console.log("Email to be saved: ", currentEmail);
    if(currentEmail == '') {
      setValidationMessage("The field is left empty")
    }
    else if (!regex.test(currentEmail)) {
      setValidationMessage("The email address is invalid")
    }
    else {
      setSubscription(true);
    }
  }

  function returnToForm() {
    setSubscription(false);
  }
  
  return(
    <div>
      {!subscription ? (
              <div className="box-main">
              <img
                className="ilustration mobile"
                src={logoMobile}
                alt="icon list"
              ></img>
              <div className="box-text">
                <h1>Stay update!</h1>
                <h2>
                  Join 60,000+ product managers receiving monthly updates on:
                </h2>
      
                <p>
                  <img src="src/assets/icon-list.svg" alt="icon list"></img>
                  Product discovery and building what matters
                </p>
                <p>
                  <img src="src/assets/icon-list.svg" alt="icon list"></img>
                  Measuring to ensure updates are a success
                </p>
                <p>
                  <img src="src/assets/icon-list.svg" alt="icon list"></img>And
                  much more!
                </p>
                <form>
                  <div className="labels">
                    <label>email address</label>
                    <label className="validations">{validationMessage}</label>
                  </div>
                  <input
                    id={"email"}
                    type={"email"}
                    placeholder={"email@company.com"}
                    onChange={(event) => addChangeHandler(event)}
                  ></input>
                  <button className="btn" type="button"
                  onClick={() => handleEmailSubmission()}>
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
              <img
                className="ilustration desktop"
                src="src/assets/illustration-sign-up-desktop.svg"
                alt="icon list"
              ></img>
            </div>
      ) : (
        <div className="box-message">
        <img
          className="icon-success"
          src="src/assets/icon-success.svg"
          alt="icon success"
        ></img>
        <h1>Thanks for subscribing!</h1>
        <p className="msg">
          A confirmation email has been sent to{' '}
          <span>{currentEmail}</span>. Please open it and click the
          button inside to confirm your subscription
        </p>
        <div onClick={() => returnToForm()} type="button" className="btn">
          Dismiss message
        </div>
      </div>
      )}
    </div>
  )
}

export { Newsletter }
