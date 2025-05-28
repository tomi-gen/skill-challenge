import sqlite from "sqlite3";

const db = new sqlite.Database("./src/databases/employees.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS roles(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS employees(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  dni TEXT NOT NULL,
  name TEXT NOT NULL,
  birthDate TEXT NOT NULL,
  isDeveloper BOOLEAN DEFAULT FALSE,
  description TEXT NOT NULL,
  role TEXT NOT NULL
)`);
});

export default db;
