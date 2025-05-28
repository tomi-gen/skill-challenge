import {
  getEmployees,
  createNewEmployee,
  deleteEmployeeByDni,
  updateEmployeeByDni,
} from "./employeesServices.js";

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
  try {
    const { dni, name, birthDate, isDeveloper, description, role } = req.body;
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

const deleteEmployeeByDniController = async (req, res) => {
  try {
    const { dni } = req.params;
    const employeeDeleted = await deleteEmployeeByDni(dni);

    return res.status(200).json({
      message: "Employee deleted successfully",
      employee: employeeDeleted,
    });
  } catch (error) {
    console.error("Error deleting the employee:", error.message);
    return res.status(500).json({
      message: "Server error while deleting employee",
      error: error.message,
    });
  }
};

const updateEmployeeByDniController = async (req, res) => {
  try {
    const { dni } = req.params;
    const updates = req.body;

    const employeeUpdated = await updateEmployeeByDni(dni, updates);
    res.status(200).json({
      message: "Employee updated succesfully",
      employee: employeeUpdated,
    });
  } catch (error) {
    console.error("Error updating the employee");
    return res.status(500).json({
      message: "Server error while updating employee",
      error: error.message,
    });
  }
};

export {
  getEmployeesController,
  createNewEmployeeController,
  deleteEmployeeByDniController,
  updateEmployeeByDniController,
};
