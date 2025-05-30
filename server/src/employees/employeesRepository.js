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

const getEmployeeByDniRepository = (dni) => {
  return new Promise((resolve, reject) => {
    db.get(
      "SELECT dni, name, birthDate, isDeveloper, description, role FROM employees WHERE dni = ?",
      [dni],
      (err, row) => {
        if (err) {
          return reject(err);
        }
        resolve(row);
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
    db.run(
      "INSERT INTO employees (dni, name, birthDate, isDeveloper, description, role) values (?, ?, ?, ?, ?, ?)",
      [dni, name, birthDate, isDeveloper, description, role],
      (err) => {
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
    db.run("DELETE FROM employees WHERE dni = ?", [dni], (err) => {
      if (err) {
        return reject(err);
      }
      resolve("The employee has been deleted succesfuly");
    });
  });
};

const updateEmployeeByDniRepository = (dni, updates) => {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE employees SET dni = ?, name = ?, birthDate = ?, isDeveloper = ?, description = ?, role = ? WHERE dni = ? ",
      [
        updates.dni,
        updates.name,
        updates.birthDate,
        updates.isDeveloper,
        updates.description,
        updates.role,
        dni,
      ],
      (err) => {
        if (err) {
          return reject(err);
        }
        resolve(updates);
      }
    );
  });
};

export {
  getEmployeesRepository,
  createEmployeeRepository,
  deleteEmployeeByDniRepository,
  updateEmployeeByDniRepository,
  getEmployeeByDniRepository,
};
