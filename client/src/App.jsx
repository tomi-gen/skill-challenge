import { useEffect, useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;
import Table from "./components/table/Table.jsx";
import Title from "./components/title/Title.jsx";
import Tabulation from "./components/tabulation/Tabulation.jsx";
function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [createButtonClicked, setCreateButtonClicked] = useState(false);
  const [completedFields, setCompletedFields] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/employees`)
      .then((response) => response.json())
      .then((result) => setEmployeesData(result));
  }, []);

  useEffect(() => {}, [editButtonClicked, createButtonClicked]);

  useEffect(() => {}, [completedFields]);

  return (
    <>
      <Tabulation
        editButtonClicked={editButtonClicked}
        setEditButtonClicked={setEditButtonClicked}
        setCreateButtonClicked={setCreateButtonClicked}
        setCompletedFields={setCompletedFields}
      ></Tabulation>

      {!editButtonClicked && !createButtonClicked ? (
        <>
          <Title>Administrador de Empleados</Title>
          <Table
            setCompletedFields={setCompletedFields}
            dataTable={employeesData}
            setEditButtonClicked={setEditButtonClicked}
          ></Table>
        </>
      ) : (
        <>
          <Title>
            {createButtonClicked ? "Agregar Empleado" : "Editar Empleado"}
          </Title>
        </>
      )}
    </>
  );
}

export default App;
