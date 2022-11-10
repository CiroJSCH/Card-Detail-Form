import "../styles/cards.css";
import frontCard from "../assets/images/bg-card-front.png";
import backCard from "../assets/images/bg-card-back.png";
import logo from "../assets/images/card-logo.svg";

const Cards = ({cardData}) => {

  return (
    <div className="cards">
      <div className="card card-back">
        <img src={backCard} alt="Back card" className="card-img"/>
        <p className="card-cvc">{cardData.cvc}</p>
      </div>
      <div className="card card-front">
        <img src={frontCard} alt="Front card" className="card-img"/>
        <img src={logo} alt="Card logo" className="card-logo"/>
        <p className="card-number">{cardData.cardNumber}</p>
        <p className="card-name">{cardData.name}</p>
        <p className="card-date">{cardData.dateM}/{cardData.dateY}</p>
      </div>
    </div>
  )
}

export default Cards