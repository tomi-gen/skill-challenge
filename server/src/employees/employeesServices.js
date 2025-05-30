import {
  getEmployeesRepository,
  createEmployeeRepository,
  deleteEmployeeByDniRepository,
  updateEmployeeByDniRepository,
  getEmployeeByDniRepository,
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

const getEmployeeByDni = async (dni) => {
  try {
    const employee = await getEmployeeByDniRepository(dni);
    return employee;
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

const deleteEmployeeByDni = async (dni) => {
  try {
    const employeDeleted = await deleteEmployeeByDniRepository(dni);
    return employeDeleted;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateEmployeeByDni = async (dni, updates) => {
  try {
    const employeeUpdated = await updateEmployeeByDniRepository(dni, updates);
    return employeeUpdated;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export {
  getEmployees,
  createNewEmployee,
  deleteEmployeeByDni,
  updateEmployeeByDni,
  getEmployeeByDni,
};
