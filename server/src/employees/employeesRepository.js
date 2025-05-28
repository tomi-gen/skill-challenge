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

export { getEmployeesRepository };
