import { useEffect, useState, useRef } from "react";
import "./form.css";
const apiUrl = import.meta.env.VITE_API_URL;

function EmployeeForm({
  completedFields,
  setEditButtonClicked,
  setCreateButtonClicked,
  editButtonClicked,
}) {
  const [radioSelected, setRadioSelected] = useState(true);

  const dniRef = useRef();
  const nameRef = useRef();
  const birthDateRef = useRef();
  const descripcionRef = useRef();
  const roleRef = useRef();

  useEffect(() => {
    completedFields.length > 0
      ? setRadioSelected(completedFields[3] == "1")
      : setRadioSelected(true);
  }, [completedFields]);

  useEffect(() => {}, [radioSelected]);

  const handleRadioChange = (e) => {
    setRadioSelected(e.target.value === "true");
  };

  function sendEmployeeData(employeeData) {
    return editButtonClicked
      ? fetch(`${apiUrl}/employees/${employeeData[0]}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employeeData),
        })
          .then((response) => response.json())
          .then((result) => {
            setEditButtonClicked(false);
            setCreateButtonClicked(false);
            console.log("Respuesta del servidor:", result);
          })
          .catch((error) => {
            console.error("Error al enviar:", error);
          })
      : fetch(`${apiUrl}/employees`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employeeData),
        })
          .then((response) => response.json())
          .then((result) => {
            setEditButtonClicked(false);
            setCreateButtonClicked(false);
            console.log("Respuesta del servidor:", result);
          })
          .catch((error) => {
            console.error("Error al enviar:", error);
          });
  }

  return (
    <form>
      <div className="field-container">
        <span>DNI</span>
        <input
          ref={dniRef}
          type="number"
          defaultValue={completedFields ? completedFields[0] : ""}
          placeholder="DNI"
        />
      </div>

      <div className="field-container">
        <span>Nombre Completo</span>
        <input
          ref={nameRef}
          type="text"
          defaultValue={completedFields ? completedFields[1] : ""}
          placeholder="Nombre Completo"
        />
      </div>

      <div className="field-container">
        <span>Fecha de Nacimiento</span>
        <input
          ref={birthDateRef}
          type="date"
          defaultValue={completedFields ? completedFields[2] : ""}
        />
      </div>

      <div className="field-container">
        <span>Es Desarrollador</span>
        <div className="field-radios">
          <div className="field-radio">
            <span>Si</span>
            <input
              type="radio"
              name="isDeveloper"
              value="true"
              checked={radioSelected === true}
              onChange={handleRadioChange}
            />
          </div>
          <div className="field-radio">
            <span>No</span>
            <input
              type="radio"
              name="isDeveloper"
              value="false"
              checked={radioSelected === false}
              onChange={handleRadioChange}
            />
          </div>
        </div>
      </div>

      <div className="field-container">
        <span>Descripcion</span>
        <input
          ref={descripcionRef}
          type="text"
          defaultValue={completedFields ? completedFields[4] : ""}
          placeholder="Descripción"
        />
      </div>

      <div className="field-container">
        <span>Rol</span>
        <input
          ref={roleRef}
          type="text"
          defaultValue={completedFields ? completedFields[5] : ""}
          placeholder="Rol"
        />
      </div>
      <button
        type="button"
        onClick={() => {
          const dni = dniRef.current.value.trim();
          const name = nameRef.current.value.trim();
          const birthDate = birthDateRef.current.value;
          const description = descripcionRef.current.value.trim();
          const role = roleRef.current.value.trim();

          if (
            validateEmptyFields([dni, name, birthDate, description, role]) &&
            validateDni(dni) &&
            validateDate(birthDate)
          )
            sendEmployeeData({
              dni,
              name,
              birthDate,
              isDeveloper: radioSelected,
              description,
              role,
            });
        }}
        className="submit-button"
      >
        Enviar
      </button>
    </form>
  );

  function validateEmptyFields(fields) {
    const isValidFields = !fields.some((field) => {
      return field.trim().length == 0;
    });
    if (!isValidFields) {
      alert("Completa todos los campos");
    }
    return isValidFields;
  }
  function validateDni(dni) {
    console.log(
      dni,
      "isNaN",
      isNaN(parseInt(dni)),
      "Mayor",
      parseInt(dni) <= 10000000
    );
    const isValidDni = !isNaN(parseInt(dni)) && parseInt(dni) >= 10000000;
    if (!isValidDni) {
      alert("El Dni tiene que se un numero valido");
    }
    return isValidDni;
  }
  function validateDate(date) {
    const selectedDate = new Date(date);
    const today = new Date();
    const isValidDate = selectedDate < today;

    if (!isValidDate) {
      alert("La fecha de nacimiento tiene que se una fecha valida");
    }

    return isValidDate;
  }
}

export default EmployeeForm;
