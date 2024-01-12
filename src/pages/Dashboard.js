import React from "react";
import PieChart from "../images/pie-chart.png";
import Files from "../images/files.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const card_style = {
    padding: "20px",
    border: "1px solid #ddd",
    backgroundColor: "#ffffff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "60%", // Adjusted to 80% of the container width
    margin: "20px auto", // Added margin around the card and centered horizontally
  };

  return (
    <div className="page">
      <h1 style={{ margin: 20, color: "black", textAlign: "left" }}>
        Dashboard
      </h1>
      <div className="bank-accounts">
        <div style={card_style}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <div>
                <p style={{ color: "black", fontSize: 12 }}>Total Balance</p>
                <p style={{ color: "black", fontSize: 48 }}>$ 875</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "#006492", fontSize: 18, paddingRight: 10 }}>
                  Food
                </p>
                <p style={{ color: "black", fontSize: 18 }}>$ 75</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "#006C52", fontSize: 18, paddingRight: 10 }}>
                  School
                </p>
                <p style={{ color: "black", fontSize: 18 }}>$ 500</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "#9D0B51", fontSize: 18, paddingRight: 10 }}>
                  Clothing
                </p>
                <p style={{ color: "black", fontSize: 18 }}>$ 50</p>
              </div>

              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ color: "#CE721E", fontSize: 18, paddingRight: 10 }}>
                  Media
                </p>
                <p style={{ color: "black", fontSize: 18 }}>$ 250</p>
              </div>
            </div>

            <img
              src={PieChart}
              style={{ hieght: 300, width: 300, objectFit: "contain" }}
              alt="Profile"
            />
          </div>
        </div>
        <h1 style={{ color: "black", textAlign: "center" }}>
          Your Receipt Folders
        </h1>
        <Link to="/dashboard-today">
          <img
            src={Files}
            style={{
              height: 300,
              width: 300,
              objectFit: "contain",
              margin: "auto",
              display: "block",
            }}
            alt="Files"
          />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
