import React, { useContext } from "react";
import DataContext from "../context/dataContext";

function Sidebar() {
  const items = ["Dashboard", "Team", "Projects", "Calendar"];
  const values = useContext(DataContext);

  const handleClick = (e) => {
    values.setValue(e.target.innerHTML);
  };

  return (
    <div className="content-container__sidebar" onClick={handleClick}>
      {items.map((el, key) => (
        <p
          key={key}
          className={
            values.selectedValue == el
              ? "content-container__selected"
              : "content-container__unSelected"
          }
        >
          {el}
        </p>
      ))}
    </div>
  );
}

export default Sidebar;
