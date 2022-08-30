import React, { useState } from "react";
import "../css/style.css";
import { IoIosAdd } from "react-icons/io";
import CardActivity from "../component/CardActivity";
const Dashboard = () => {
  const [GetButton, SetButton] = useState([]);
  const onAddBtnClick = () => {
    SetButton(GetButton.concat(<CardActivity />));
  };
  return (
    <>
      <body>
        <h3 className="header">To do list App</h3>
        <div className="activity-wrap">
          <div>ACTIVITY</div>
          <button className="Add" onClick={onAddBtnClick}>
            <IoIosAdd size={50} color={"white"} />
          </button>
        </div>
        <div className="card-wrapper">{GetButton}</div>
      </body>
    </>
  );
};

export default Dashboard;
