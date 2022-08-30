import React from "react";
import "../css/style.css";
import { MdDeleteOutline } from "react-icons/md";
const CardActivity = () => {
  return (
    <>
      <div className="container">
        <div className="card-activity">
          <div style={{cursor:"pointer"}}>
            <MdDeleteOutline size={30}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardActivity;
