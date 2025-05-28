import express from "express";
import cors from "cors";
import employeesRouter from "./src/employees/employeesRouters.js";
import rolesRouter from "./src/roles/rolesRouter.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/employees", employeesRouter);
app.use("/roles", rolesRouter);

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});
