import { useEffect, useState } from "react";
import "./App.css";
const apiUrl = import.meta.env.VITE_API_URL;
import Table from "./components/Table.jsx";

function App() {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/employees`)
      .then((response) => response.json())
      .then((result) => setEmployeesData(result));
  }, []);

  return <Table dataTable={employeesData}></Table>;
}

export default App;
