// TransactionCard.js
import React from 'react';
import '../style/TransactionCard.css';

const TransactionCard = () => {
  // Hard-coded values for testing
  const cardImage = "visa-card-image.png";
  const date = "January 10, 2024";
  const time = "12:30 PM";
  const location = "Online Store";
  const price = "59.99";

  return (
    <div className="transaction-card">
      <div className="left-side">
        <img src={cardImage} alt="Visa Card" className="card-image" />
      </div>
      <div className="right-side">
        <div className="transaction-details">
          <p className="time">{time}</p>
          <p className="date">{date}</p>
          <p className="location">{location}</p>
          <p className="price">${price}</p>
        </div>
        <div className="receipt-button">
          <button>View Receipt</button>
        </div>
      </div>
    </div>
  );
 
//   have this in a div block on whatever component your using this on for varying number. kinda like a constructor
//   <TransactionCard
//         cardImage="visa-card-image.png"
//         date="January 10, 2024"
//         time="12:30 PM"
//         location="Online Store"
//         price="59.99"
//       />
};

export default TransactionCard;
