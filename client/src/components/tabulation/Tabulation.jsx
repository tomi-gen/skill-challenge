import { useState } from "react";
import "./tabulation.css";
import { useEffect } from "react";

function Tabulation({
  editButtonClicked,
  setEditButtonClicked,
  setCreateButtonClicked,
  setCompletedFields,
}) {
  const [tabSelected, setTabSelected] = useState(0);
  useEffect(() => {
    if (editButtonClicked) {
      setTabSelected(1);
    }
  }, [editButtonClicked]);
  return (
    <div className="tabulation">
      {
        <button
          onClick={() => {
            setEditButtonClicked(false);
            setCreateButtonClicked(false);
            setTabSelected(0);
          }}
          className={tabSelected == 0 ? "" : "tab-not-selected"}
        >
          Tabla
        </button>
      }
      {
        <button
          onClick={() => {
            setTabSelected(1);
            if (!editButtonClicked) {
              setCompletedFields([]);
              setCreateButtonClicked(true);
              setEditButtonClicked(false);
            }
          }}
          className={tabSelected == 1 ? "" : "tab-not-selected"}
        >
          Empleado
        </button>
      }
    </div>
  );
}

export default Tabulation;
