import { useEffect, useState, useRef } from "react";
import "./table.css";
import EditButton from "../edit-button/EditButton.jsx";
import DeleteButton from "../delete-button/DeleteButton.jsx";
import {
  toDisplayFormat,
  getHeaderValues,
  getTableValues,
} from "./tableUtils.js";

function Table({
  dataTable,
  setEditButtonClicked,
  setCompletedFields,
  isDeletedUseState,
  isCreatedUseState,
  setUserMessage,
}) {
  const { isCreated, setIsCreated } = isCreatedUseState;
  const { isDeleted, setIsDeleted } = isDeletedUseState;
  const [bodyTable, setBodyTable] = useState([]);
  const [headerTable, setHeaderTable] = useState([]);
  const [isDeveloperIndex, setIsDeveloperIndex] = useState(-1);
  const tableContainerRef = useRef(null);

  useEffect(() => {
    if (dataTable.length > 0) {
      setBodyTable(getTableValues(dataTable));
      setHeaderTable(getHeaderValues(dataTable));
    }
  }, [dataTable]);

  useEffect(() => {
    if (isCreated && bodyTable.length > 0) {
      const container = tableContainerRef.current;
      container.scrollTop = container.scrollHeight;
      setIsCreated(false);
    }
  }, [bodyTable]);

  useEffect(() => {
    headerTable.forEach((h, i) => {
      if (h === "isDeveloper") {
        setIsDeveloperIndex(i);
      }
    });
  }, [headerTable]);

  return dataTable.length > 0 ? (
    <div ref={tableContainerRef} className="table-container">
      <table>
        <thead>
          <tr>
            {headerTable.map((header, i) => {
              return (
                <th
                  key={i}
                  className={`${
                    i % 2 == 0
                      ? "header-column-color"
                      : "header-alternate-column-color"
                  }`}
                >
                  {toDisplayFormat(header)}
                </th>
              );
            })}
            <th
              className={`action-column ${
                headerTable.length % 2 != 0
                  ? "header-alternate-column-color"
                  : "header-column-color"
              }`}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bodyTable.map((row, i) => {
            return (
              <tr key={i}>
                {row.map((data, idx) => {
                  return isDeveloperIndex == idx ? (
                    <td
                      className={`${
                        idx % 2 == 0 ? "column-color" : "alternate-column-color"
                      }`}
                      key={i + String(idx)}
                    >
                      {data == 1 ? "Si" : "No"}
                    </td>
                  ) : (
                    <td
                      className={`${
                        idx % 2 == 0 ? "column-color" : "alternate-column-color"
                      }`}
                      key={i + String(idx)}
                    >
                      {data}
                    </td>
                  );
                })}
                <td
                  className={`action-column ${
                    row.length % 2 != 0
                      ? "alternate-column-color"
                      : "column-color"
                  }`}
                >
                  <div className="controllers">
                    <EditButton
                      rowData={row}
                      setEditButtonClicked={setEditButtonClicked}
                      setCompletedFields={setCompletedFields}
                    ></EditButton>
                    <DeleteButton
                      setUserMessage={setUserMessage}
                      setIsDeleted={setIsDeleted}
                      dni={row[0]}
                      isDeleted={isDeleted}
                    ></DeleteButton>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  ) : (
    <div className="empty-table">
      <span>There is no data in the table</span>
    </div>
  );
}

export default Table;
