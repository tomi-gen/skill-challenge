import {
  getEmployeesRepository,
  createEmployeeRepository,
} from "./employeesRepository.js";

const getEmployees = async () => {
  try {
    const employees = await getEmployeesRepository();
    return employees;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const createNewEmployee = async (
  dni,
  name,
  birthDate,
  isDeveloper,
  description,
  role
) => {
  try {
    const newEmployee = await createEmployeeRepository(
      dni,
      name,
      birthDate,
      isDeveloper,
      description,
      role
    );
    return newEmployee;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getEmployees, createNewEmployee };
