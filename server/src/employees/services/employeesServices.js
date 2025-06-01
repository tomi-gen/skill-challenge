import {
  getEmployeesRepository,
  createEmployeeRepository,
  deleteEmployeeByDniRepository,
  updateEmployeeByDniRepository,
  getEmployeeByDniRepository,
} from "../repositry/employeesRepository.js";
import {
  createEmployeeValidation,
  updateEmployeeValidation,
  dniEmployeeValidation,
} from "../validations/employeesValidations.js";

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
    dniEmployeeValidation(dni);
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
    await createEmployeeValidation(
      dni,
      name,
      birthDate,
      isDeveloper,
      description,
      role
    );

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
    dniEmployeeValidation(dni);
    const employeDeleted = await deleteEmployeeByDniRepository(dni);
    return employeDeleted;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const updateEmployeeByDni = async (dni, updates) => {
  try {
    await updateEmployeeValidation(updates, dni);
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
