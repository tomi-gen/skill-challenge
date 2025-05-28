import { getEmployees, createNewEmployee } from "./employeesServices.js";

const getEmployeesController = async (req, res) => {
  try {
    const employees = await getEmployees();

    if (!employees) {
      return res.status(404).json({ message: "No employees found" });
    }
    return res.status(200).json(employees);
  } catch (error) {
    console.error("Error while fetching employee:", error.message);
    return res
      .status(500)
      .json({ message: "Server error while fetching employee" });
  }
};

const createNewEmployeeController = async (req, res) => {
  const { dni, name, birthDate, isDeveloper, description, role } = req.body;
  try {
    const newEmployee = await createNewEmployee(
      dni,
      name,
      birthDate,
      isDeveloper,
      description,
      role
    );

    return res.status(200).json({
      message: "Employee created successfully",
      employee: newEmployee,
    });
  } catch (error) {
    console.error("Error creating a new employee:", error.message);
    return res.status(500).json({
      message: "Server error while creating employee",
      error: error.message,
    });
  }
};

export { getEmployeesController, createNewEmployeeController };
