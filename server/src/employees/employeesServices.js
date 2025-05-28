import { getEmployeesRepository } from "./employeesRepository.js";

const getEmployees = async () => {
  try {
    const employees = await getEmployeesRepository();
    return employees;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getEmployees };
