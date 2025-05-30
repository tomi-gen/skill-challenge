import db from "../databases/db.js";

const getRolesRepository = async () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT name, description FROM roles", (err, rows) => {
      if (err) {
        return reject(err);
      }
      resolve(rows);
    });
  });
};

export { getRolesRepository };
