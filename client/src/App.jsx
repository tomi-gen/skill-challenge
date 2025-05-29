import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import Table from "./components/table/Table.jsx";
import Title from "./components/title/Title.jsx";
function App() {
  const [employeesData, setEmployeesData] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/employees`)
      .then((response) => response.json())
      .then((result) => setEmployeesData(result));
  }, []);

  return (
    <>
      <Title>Administrador de Empleados</Title>
      <Table dataTable={employeesData}></Table>
    </>
  );
}

export default App;
