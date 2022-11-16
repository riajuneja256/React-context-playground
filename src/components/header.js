import React, { useContext } from "react";
import DataContext from "../context/dataContext";

function Header() {
  const contextValues = useContext(DataContext);

  const handleClick = () => {
    contextValues.setEditValue(() => !contextValues.edit);
  };

  return (
    <nav>
      <ul className="nav-container">
        <li className="nav-container__header">React Context Playground</li>
        {contextValues.selectedValue == "Dashboard" && (
          <li
            className={
              contextValues.edit === true
                ? "nav-container__edit-btn-clicked nav-container__edit-btn"
                : "nav-container__edit-btn"
            }
            onClick={handleClick}
          >
            Switch to edit mode
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Header;
