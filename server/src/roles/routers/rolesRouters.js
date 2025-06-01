import express from "express";
import { getRolesController } from "../controllers/rolesController.js";

const rolesRouter = express.Router();

rolesRouter.get("/", getRolesController);

export default rolesRouter;
