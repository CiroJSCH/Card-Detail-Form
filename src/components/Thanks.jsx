import { useState } from "react";

import CardForm from "./CardForm";

import { defaultValues } from "../util/defaultValues";

import completeLogo from "../assets/images/icon-complete.svg"
import "../styles/thanks.css";


const Thanks = ({setCardData, setComplete}) => {

  const [done, setDone] = useState(false);

  return (
    done ? <CardForm /> :
    <div className="thanks">
      <img src={completeLogo} alt="Completed icon"/>
      <h2>THANK YOU!</h2>
      <p>We've added your card details</p>
      <button onClick={() => {
        setDone(true)
        setCardData(defaultValues)
        setComplete(false)
        }}>Continue</button>
    </div>
  );
};

export default Thanks;
