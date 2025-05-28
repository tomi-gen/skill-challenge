import express from "express";
import { getEmployeesController } from "./employeesController.js";

const employeesRouter = express.Router();

employeesRouter.get("/", getEmployeesController);

export default employeesRouter;
