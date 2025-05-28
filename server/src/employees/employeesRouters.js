import express from "express";
import {
  getEmployeesController,
  createNewEmployeeController,
} from "./employeesControllers.js";

const employeesRouter = express.Router();

employeesRouter.get("/", getEmployeesController);
employeesRouter.post("/", createNewEmployeeController);

export default employeesRouter;
