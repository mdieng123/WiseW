import React, { useState, useEffect } from "react";
import "../style/Appp.css"; // Import your CSS file

const cardHeight = 250;
const cardTitle = 45;
const cardPadding = 10;

const cards = [
  {
    name: "Shot",
    color: "#a9d0b6",
    price: "30 CHF",
  },
  {
    name: "Juice",
    color: "#e9bbd1",
    price: "64 CHF",
  },
  {
    name: "Mighty Juice",
    color: "#eba65c",
    price: "80 CHF",
  },
  {
    name: "Sandwich",
    color: "#95c3e4",
    price: "85 CHF",
  },
  {
    name: "Combi",
    color: "#1c1c1c",
    price: "145 CHF",
  },
  {
    name: "Signature",
    color: "#a390bc",
    price: "92 CHF",
  },
  {
    name: "Coffee",
    color: "#fef2a0",
    price: "47 CHF",
  },
];

const Appp = () => {
    const [y, setY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setY(document.documentElement.scrollTop || document.body.scrollTop);
      };
  
      document.addEventListener("scroll", handleScroll);
  
      return () => {
        document.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <div className="root">
        <div className="container">
          <div className="absolute-fill">
            {cards.map((card, i) => {
              const inputRange = [-cardHeight, 0];
              const outputRange = [
                cardHeight * i,
                (cardHeight - cardTitle) * -i,
              ];
              if (i > 0) {
                inputRange.push(cardPadding * i);
                outputRange.push((cardHeight - cardPadding) * -i);
              }
              const translateY = interpolate(y, inputRange, outputRange);
  
              return (
                <div key={card.name} style={{ transform: `translateY(${translateY}px)` }}>
                  <div className="card" style={{ height: `${cardHeight}px`, borderRadius: '10px', backgroundColor: card.color }} />
                </div>
              );
            })}
          </div>
          <div
            className="scroll-view"
            onScroll={(e) => setY(e.target.scrollTop)}
          />
        </div>
      </div>
    );
  };

const interpolate = (value, inputRange, outputRange) => {
  const clamp = (input, a, b) => Math.max(Math.min(input, Math.max(a, b)), Math.min(a, b));

  const position = (value - inputRange[0]) / (inputRange[1] - inputRange[0]);
  const result = position * (outputRange[1] - outputRange[0]) + outputRange[0];

  return clamp(result, Math.min(outputRange[0], outputRange[1]), Math.max(outputRange[0], outputRange[1]));
};

export default Appp;
