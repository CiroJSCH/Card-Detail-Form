import "../styles/thanks.css";
import completeLogo from "../assets/images/icon-complete.svg"
import { useState } from "react";
import CardForm from "./CardForm";

const Thanks = () => {

  const [done, setDone] = useState(false);

  return (
    done ? <CardForm /> :
    <div className="thanks">
      <img src={completeLogo} alt="Completed icon"/>
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button onClick={() => setDone(true)}>Continue</button>
    </div>
  );
};

export default Thanks;
