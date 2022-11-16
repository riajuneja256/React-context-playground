import React, { useContext } from "react";
import DataContext from "../context/dataContext";
import DashboardCard from "./dashboardCard";

function Dashboard() {
  const contextValues = useContext(DataContext);

  const handleChange = (updatedData) => {
    let tempData = [...contextValues.dashboardData];
    tempData.map((el) => {
      if (el.value == updatedData.value) {
        el.header = updatedData.header;
      }
    });
    contextValues.setDashboardData(tempData);
  };
  return (
    <div className="content-container__content">
      {contextValues.dashboardData &&
        contextValues.dashboardData.length &&
        contextValues.dashboardData.map((cardData, key) => (
          <DashboardCard
            data={cardData}
            handleChangeParent={handleChange}
            key={key}
          />
        ))}
    </div>
  );
}

export default Dashboard;
