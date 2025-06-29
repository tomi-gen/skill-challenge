import { useEffect, useState, useRef } from "react";
import {
  validateDate,
  validateDni,
  validateEmptyFields,
} from "./formValidations";
import SelectOptions from "../select-options/SelectOptions";
import "./form.css";
const apiUrl = import.meta.env.VITE_API_URL;

function EmployeeForm({
  completedFields,
  setEditButtonClicked,
  setCreateButtonClicked,
  editButtonClicked,
  setIsCreated,
  setUserMessage,
}) {
  const [radioSelected, setRadioSelected] = useState(true);
  const [optionSelected, setOptionSelected] = useState("");

  const dniRef = useRef();
  const nameRef = useRef();
  const birthDateRef = useRef();
  const descripcionRef = useRef();

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
      ? fetch(`${apiUrl}/employees/${completedFields[0]}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(employeeData),
        })
          .then((response) => response.json())
          .then((result) => {
            if (result.error) {
              setUserMessage(result.error);
            } else {
              setEditButtonClicked(false);
              setCreateButtonClicked(false);
              setUserMessage(result.message);
            }
          })
          .catch((error) => {
            setUserMessage(error.message);
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
            setIsCreated(true);
            if (result.error) {
              setUserMessage(result.error);
            } else {
              setEditButtonClicked(false);
              setCreateButtonClicked(false);
              setUserMessage(result.message);
            }
          })
          .catch((error) => {
            setUserMessage(error.message);
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
        <span>Complete Name</span>
        <input
          ref={nameRef}
          type="text"
          defaultValue={completedFields ? completedFields[1] : ""}
          placeholder="Complete Name"
        />
      </div>

      <div className="field-container">
        <span>Birth Date</span>
        <input
          role="birth-date"
          ref={birthDateRef}
          type="date"
          defaultValue={completedFields ? completedFields[2] : ""}
        />
      </div>

      <div className="field-container">
        <span>Is Developer</span>
        <div className="field-radios">
          <div className="field-radio">
            <span>Yes</span>
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
        <span>Description</span>
        <input
          ref={descripcionRef}
          type="text"
          defaultValue={completedFields ? completedFields[4] : ""}
          placeholder="Description"
        />
      </div>
      <div className="field-container">
        <span>Role</span>
        <SelectOptions
          setOptionSelected={setOptionSelected}
          endpoint={"roles"}
          completedValue={completedFields ? completedFields[5] : ""}
        ></SelectOptions>
      </div>
      <button
        type="button"
        onClick={() => {
          const dni = dniRef.current.value.trim();
          const name = nameRef.current.value.trim();
          const birthDate = birthDateRef.current.value;
          const description = descripcionRef.current.value.trim();
          const role = optionSelected;
          if (!validateEmptyFields([dni, name, birthDate, role])) {
            setUserMessage("Complete all fields");
          } else if (!validateDni(dni)) {
            setUserMessage("The DNI must be a valid number");
          } else if (!validateDate(birthDate)) {
            setUserMessage("The birth date must be a valid date");
          } else {
            sendEmployeeData({
              dni,
              name,
              birthDate,
              isDeveloper: radioSelected,
              description,
              role,
            });
          }
        }}
        className="submit-button"
      >
        Send
      </button>
    </form>
  );
}

export default EmployeeForm;
