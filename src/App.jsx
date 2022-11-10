import { useEffect, useState } from "react";

import Cards from "./components/Cards";
import CardForm from "./components/CardForm";

import "./styles/reset.css";
import "./styles/app.css";

const defaultValues = {
  "name" : "JANE APPLESEED",
  "cardNumber": "0000 0000 0000 0000",
  "dateM": "00",
  "dateY": "00",
  "cvc": "000",
}

const App = () => {

  const [cardData, setCardData] = useState(defaultValues);

  return (
    <div className="App">
      <Cards cardData={cardData}/>
      <CardForm setCardData={setCardData} cardData={cardData}/>
    </div>
  )
}

export default App;
