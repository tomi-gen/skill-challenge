import db from "../databases/db.js";

const getEmployeesRepository = () => {
  return new Promise((resolve, reject) => {
    db.all(
      "SELECT dni, name, birthDate, isDeveloper, description, role FROM employees",
      (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve(rows);
      }
    );
  });
};

const createEmployeeRepository = (
  dni,
  name,
  birthDate,
  isDeveloper,
  description,
  role
) => {
  return new Promise((resolve, reject) => {
    db.all(
      "INSERT INTO employees (dni, name, birthDate, isDeveloper, description, role) values (?, ?, ?, ?, ?, ?)",
      [dni, name, birthDate, isDeveloper, description, role],
      (err, rows) => {
        if (err) {
          return reject(err);
        }
        resolve({
          dni,
          name,
          birthDate,
          isDeveloper,
          description,
          role,
        });
      }
    );
  });
};

const deleteEmployeeByDniRepository = (dni) => {
  return new Promise((resolve, reject) => {
    db.all("DELETE FROM employees WHERE dni = ?", [dni], (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

export {
  getEmployeesRepository,
  createEmployeeRepository,
  deleteEmployeeByDniRepository,
};
