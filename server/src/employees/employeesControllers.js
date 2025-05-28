import { getEmployees } from "./employeesServices.js";

const getEmployeesController = async (req, res) => {
  try {
    const employees = await getEmployees();
    return res.status(200).json(employees);
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export { getEmployeesController };
