import React, { useState, useContext } from "react";
import DataContext from "../context/dataContext";

function DashboardCard({ data, handleChangeParent }) {
  const [cardData, updateData] = useState(data);
  const contextValues = useContext(DataContext);

  const handleChange = (e) => {
    updateData({ ...cardData, header: e.target.value });
    handleChangeParent({ ...cardData, header: e.target.value });
  };
  return (
    <div className="content-container__content-card" key={cardData.value}>
      <input
        className={contextValues.edit && "content-container__inputClicked"}
        type="text"
        value={cardData.header}
        onChange={handleChange}
        disabled={contextValues.edit === true ? false : true}
      />
      <p>{cardData.value}</p>
    </div>
  );
}

export default DashboardCard;
