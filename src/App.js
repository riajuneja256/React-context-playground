import Header from "./components/header";
import Container from "./components/container";
import "./css/style.scss";
import HeaderContext from "./context/headerContext";
import { useState } from "react";

function App() {
  const [edit, setEditValue] = useState(false);
  return (
    <HeaderContext.Provider value={{ edit, setEditValue }}>
      <Header />
      <Container />
    </HeaderContext.Provider>
  );
}

export default App;
