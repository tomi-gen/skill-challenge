import sqlite from "sqlite3";

const db = new sqlite.Database("./src/databases/employees.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS employees(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dni INTEGER NOT NULL UNIQUE,
  name TEXT NOT NULL,
  birthDate TEXT NOT NULL,
  isDeveloper BOOLEAN DEFAULT FALSE,
  description TEXT NOT NULL,
  role TEXT NOT NULL
)`);
  db.run(`CREATE TABLE IF NOT EXISTS roles(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL
  )`);

  db.get(`SELECT COUNT(*) AS count FROM roles`, (err, row) => {
    if (err) {
      console.error(err);
      return;
    }

    if (row.count === 0) {
      db.run(
        `INSERT INTO roles (name, description) VALUES 
        ('Developer', 'Software Developer'),
        ('QA', 'Quality Assurance'),
        ('Designer', 'UI/UX Designer'),
        ('RH', 'Recursos Humanos')`,
        (err) => {
          if (err) {
            console.error("Error al insertar los roles iniciales", err);
            return;
          }
          console.log("Roles iniciales insertados");
        }
      );
    }
  });
});

export default db;
