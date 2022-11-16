import React, { useState } from "react";
import Sidebar from "./sidebar";
import Content from "./content";
import DataContext from "../context/dataContext";
import { QueryClient, QueryClientProvider } from "react-query";

function Container() {
  const [selectedValue, setValue] = useState("Dashboard");
  const [dashboardData, setDashboardData] = useState([
    { header: "Account Balance", value: "$30,211.28" },
    { header: "Pending", value: "-$19,500.00" },
    { header: "Processed", value: "$12,000.00" },
    { header: "Net Worth", value: "$52,568.22" },
    { header: "Investments", value: "$22,568.22" },
    { header: "Cash", value: "$30,000.00" },
  ]);
  const queryClient = new QueryClient();

  return (
    <DataContext.Provider
      value={{ selectedValue, setValue, dashboardData, setDashboardData }}
    >
      <div className="content-container">
        <Sidebar />
        <QueryClientProvider client={queryClient}>
          <Content />
        </QueryClientProvider>
      </div>
    </DataContext.Provider>
  );
}

export default Container;
