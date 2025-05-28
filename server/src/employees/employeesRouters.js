import express from "express";
import { getEmployeesController } from "./employeesControllers.js";

const employeesRouter = express.Router();

employeesRouter.get("/", getEmployeesController);

export default employeesRouter;
