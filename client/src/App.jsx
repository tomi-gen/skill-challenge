const apiUrl = import.meta.env.VITE_API_URL;
import { useEffect, useState } from "react";
import Table from "./components/table/Table.jsx";
import Title from "./components/title/Title.jsx";
import Tabulation from "./components/tabulation/Tabulation.jsx";
import EmployeeForm from "./components/form/Form.jsx";
import Loading from "./components/loading/Loading.jsx";
import Error from "./components/error/error.jsx";
import UserMessage from "./components/user-message/UserMessage.jsx";

function App() {
  const [employeesData, setEmployeesData] = useState([]);
  const [editButtonClicked, setEditButtonClicked] = useState(false);
  const [createButtonClicked, setCreateButtonClicked] = useState(false);
  const [completedFields, setCompletedFields] = useState([]);
  const [isCreated, setIsCreated] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [userMessage, setUserMessage] = useState("");

  function fetchApi(endpoint) {
    setIsError(false);
    setIsLoading(true);
    return fetch(`${apiUrl}/${endpoint}`)
      .then((response) => response.json())
      .then((result) => {
        setEmployeesData(result);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
        setIsError(true);
      });
  }

  useEffect(() => {
    fetchApi("employees");
  }, [editButtonClicked, createButtonClicked, isDeleted]);

  useEffect(() => {}, [completedFields, isError, isLoading, userMessage]);

  return (
    <>
      {userMessage ? (
        <UserMessage
          setUserMessage={setUserMessage}
          userMessage={userMessage}
        ></UserMessage>
      ) : (
        <></>
      )}

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
              isDeletedUseState={{ setIsDeleted, isDeleted }}
              isCreatedUseState={{ setIsCreated, isCreated }}
              setUserMessage={setUserMessage}
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
            setIsCreated={setIsCreated}
            setUserMessage={setUserMessage}
          ></EmployeeForm>
        </>
      )}
    </>
  );
}

export default App;
