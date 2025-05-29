const apiUrl = import.meta.env.VITE_API_URL;
import { useEffect, useState } from "react";
import Table from "./components/table/Table.jsx";
import Title from "./components/title/Title.jsx";
import Tabulation from "./components/tabulation/Tabulation.jsx";
import EmployeeForm from "./components/form/Form.jsx";
import Loading from "./components/loading/Loading.jsx";
import Error from "./components/error/error.jsx";

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [createButtonClicked, setCreateButtonClicked] = useState(false);
  const [completedFields, setCompletedFields] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  function fetchApi(endpoint) {
    setIsError(false);
    setIsLoading(true);
    return fetch(`${apiUrl}/${endpoint}`)
      .then((response) => response.json())
      .then((result) => {
        setEmployeesData(result);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchApi("employees").catch((err) => {
      setIsError(true);
    });
  }, [editButtonClicked, createButtonClicked, isDeleted]);

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
          {isLoading ? (
            <Loading></Loading>
          ) : isError ? (
            <Error></Error>
          ) : (
            <Table
              setCompletedFields={setCompletedFields}
              dataTable={employeesData}
              setEditButtonClicked={setEditButtonClicked}
              setIsDeleted={setIsDeleted}
              isDeleted={isDeleted}
            ></Table>
          )}
        </>
      ) : (
        <>
          <Title>
            {createButtonClicked ? "Agregar Empleado" : "Editar Empleado"}
          </Title>
          <EmployeeForm
            setEditButtonClicked={setEditButtonClicked}
            setCreateButtonClicked={setCreateButtonClicked}
            editButtonClicked={editButtonClicked}
            completedFields={completedFields}
          ></EmployeeForm>
        </>
      )}
    </>
  );
}

export default App;
