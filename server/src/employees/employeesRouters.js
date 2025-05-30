import express from "express";
import {
  getEmployeesController,
  createNewEmployeeController,
  deleteEmployeeByDniController,
  updateEmployeeByDniController,
  getEmployeeByDniController,
} from "./employeesControllers.js";

const employeesRouter = express.Router();

employeesRouter.get("/", getEmployeesController);
employeesRouter.get("/:dni", getEmployeeByDniController);
employeesRouter.post("/", createNewEmployeeController);
employeesRouter.delete("/:dni", deleteEmployeeByDniController);
employeesRouter.put("/:dni", updateEmployeeByDniController);

export default employeesRouter;
