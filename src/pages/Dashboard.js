import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../style/Main.css';
import Folder from '../components/Folder/Folder.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  faMoneyBillWave,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    return (
      <body>
        <div class="container mt-5">
            
            <div class="row">
                <div class="col">
                    <Folder header = "Groceries"></Folder>
                </div>
                <div class="col">
                    <Folder header = "Groceries"></Folder>
                </div>
                <div class="col">
                    <Folder header = "Groceries"></Folder>
                </div>
            </div>
        </div>
      </body>
    );
  };
  
  export default Dashboard;
  