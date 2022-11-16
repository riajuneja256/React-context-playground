import { useState } from "react";
import DataContext from "./context/dataContext";
import Container from "./components/container";
import Header from "./components/header";
import "./css/styles.scss";

function App() {
  const [selectedValue, setValue] = useState("Dashboard");
  const [edit, setEditValue] = useState(false);
  const [dashboardData, setDashboardData] = useState([
    { header: "Account Balance", value: "$30,211.28" },
    { header: "Pending", value: "-$19,500.00" },
    { header: "Processed", value: "$12,000.00" },
    { header: "Net Worth", value: "$52,568.22" },
    { header: "Investments", value: "$22,568.22" },
    { header: "Cash", value: "$30,000.00" },
  ]);
  return (
    <DataContext.Provider
      value={{
        selectedValue,
        setValue,
        dashboardData,
        setDashboardData,
        edit,
        setEditValue,
      }}
    >
      <Header />
      <Container />
    </DataContext.Provider>
  );
}

export default App;
