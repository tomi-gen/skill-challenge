import express from "express";
import cors from "cors";
import employeesRouter from "./src/employees/routers/employeesRouters.js";
import rolesRouter from "./src/roles/routers/rolesRouters.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use("/employees", employeesRouter);
app.use("/roles", rolesRouter);

app.listen(PORT, () => {
  console.log(`Server listening in http://localhost:${PORT}`);
});
