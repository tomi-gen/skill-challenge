import { useEffect, useState } from "react";
import "./table.css";

function Table({ dataTable }) {
  const [bodyTable, setBodyTable] = useState([]);
  const [headerTable, setHeaderTable] = useState([]);
  useEffect(() => {
    if (dataTable.length > 0) {
      setBodyTable(getTableValues(dataTable));
      setHeaderTable(getHeaderValues(dataTable));
    }
  }, [dataTable]);

  useEffect(() => {
    console.log(headerTable);
  }, [headerTable]);
  useEffect(() => {
    console.log(bodyTable);
  }, [bodyTable]);

  return (
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
        </tr>
      </thead>
      <tbody>
        {bodyTable.map((row, i) => {
          return (
            <tr key={i}>
              {row.map((data, idx) => {
                return (
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
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function toDisplayFormat(str) {
  return str
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function getTableValues(dataTable) {
  return dataTable.map((d) => {
    return Object.values(d);
  });
}

function getHeaderValues(dataTable) {
  return Object.keys(dataTable[0]);
}

export default Table;
