import { useState, useEffect } from "react";
import "./select-options.css";
import selectArrow from "../../assets/select-arrow-icon.svg";

const apiUrl = import.meta.env.VITE_API_URL;

function SelectOptions({ endpoint, setOptionSelected, completedValue }) {
  const [selectValues, setSelectValues] = useState([]);
  const [selectedValue, setSelectedValue] = useState("NA");

  useEffect(() => {
    fetch(`${apiUrl}/${endpoint}`)
      .then((response) => response.json())
      .then((result) => {
        setSelectValues(result);
        if (result.length > 0) {
          setSelectedValue(completedValue ? completedValue : result[0].name);
          setOptionSelected(completedValue ? completedValue : result[0].name);
        } else {
          setSelectedValue("NA");
          setOptionSelected("NA");
        }
      });
  }, [endpoint, completedValue]);

  return (
    <div className="select-container">
      <select
        name="select"
        value={selectedValue}
        onChange={(e) => {
          setSelectedValue(e.target.value);
          setOptionSelected(e.target.value);
        }}
      >
        {selectValues.length > 0 ? (
          selectValues.map((selectValue, i) => (
            <option value={selectValue.name} key={i}>
              {selectValue.description}
            </option>
          ))
        ) : (
          <option value="NA">NA</option>
        )}
      </select>
      <img src={selectArrow} width={"15px"} alt="Select arrow" />
    </div>
  );
}

export default SelectOptions;
