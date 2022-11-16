import React, { useContext } from "react";
import DataContext from "../context/dataContext";
import Dashboard from "./dashboard";
import Team from "./team";
import Calendar from "./calendar";

function Content() {
  const values = useContext(DataContext);

  return (
    <>
      {values.selectedValue == "Dashboard" ? (
        <Dashboard />
      ) : values.selectedValue == "Team" ? (
        <Team />
      ) : values.selectedValue == "Projects" ? (
        <div>Projects</div>
      ) : (
        <Calendar />
      )}
    </>
  );
}

export default Content;
