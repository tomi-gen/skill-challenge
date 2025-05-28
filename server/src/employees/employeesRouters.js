import express from "express";
import {
  getEmployeesController,
  createNewEmployeeController,
  deleteEmployeeByDniController,
  updateEmployeeByDniController,
} from "./employeesControllers.js";

const employeesRouter = express.Router();

employeesRouter.get("/", getEmployeesController);
employeesRouter.post("/", createNewEmployeeController);
employeesRouter.delete("/:dni", deleteEmployeeByDniController);
employeesRouter.patch("/:dni", updateEmployeeByDniController);

export default employeesRouter;
