import { useState } from "react";
import "./tabulation.css";
import { useEffect } from "react";
import Tab from "./tab/Tab.jsx";

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
      <Tab
        onClickAction={() => {
          setEditButtonClicked(false);
          setCreateButtonClicked(false);
          setTabSelected(0);
        }}
        tabSelected={tabSelected}
        tabPosition={0}
      >
        Table
      </Tab>
      <Tab
        onClickAction={() => {
          setTabSelected(1);
          if (!editButtonClicked) {
            setCompletedFields([]);
            setCreateButtonClicked(true);
            setEditButtonClicked(false);
          }
        }}
        tabSelected={tabSelected}
        tabPosition={1}
      >
        Employee
      </Tab>
    </div>
  );
}

export default Tabulation;
