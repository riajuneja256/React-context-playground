import React, { useState, useContext } from "react";
import HeaderContext from "../context/headerContext";

function DashboardCard({ data, handleChangeParent }) {
  const [cardData, updateData] = useState(data);
  const headerContextValues = useContext(HeaderContext);
  const handleChange = (e) => {
    updateData({ ...cardData, header: e.target.value });
    handleChangeParent({ ...cardData, header: e.target.value });
  };
  return (
    <div className="content-container__content-card" key={cardData.value}>
      <input
        className={
          headerContextValues.edit && "content-container__inputClicked"
        }
        type="text"
        value={cardData.header}
        onChange={handleChange}
        disabled={headerContextValues.edit === true ? false : true}
      />
      <p>{cardData.value}</p>
    </div>
  );
}

export default DashboardCard;
