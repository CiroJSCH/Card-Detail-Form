import Cards from "./components/Cards";
import CardForm from "./components/CardForm";

import "./styles/reset.css";
import "./styles/app.css";

const App = () => {
  return (
    <div className="App">
      <Cards />
      <CardForm />
    </div>
  )
}

export default App;
