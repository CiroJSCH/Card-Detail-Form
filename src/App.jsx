import { useState } from "react";

import Cards from "./components/Cards";
import CardForm from "./components/CardForm";

import { defaultValues } from "./util/defaultValues";

import "./styles/reset.css";
import "./styles/app.css";

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
