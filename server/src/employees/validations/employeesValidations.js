import { getEmployeeByDni } from "../services/employeesServices.js";

const dniEmployeeValidation = async (dni) => {
  if (validateDni(dni)) {
    throw new Error("The DNI must be a valid number");
  }
};

const updateEmployeeValidation = async (
  { dni, name, birthDate, isDeveloper, description, role },
  paramDni
) => {
  if (validateEmptyFields([name, dni, birthDate, description, role])) {
    throw new Error("Complete all fields");
  }
  if (validateDni(dni)) {
    throw new Error("The DNI must be a valid number");
  }

  if (typeof isDeveloper != "boolean") {
    throw new Error("isDeveloper must be boolean");
  }

  if (validateDate(birthDate)) {
    throw new Error("The birth date must be a valid date");
  }

  const actualEmployee = await getEmployeeByDni(paramDni);
  if (!actualEmployee) {
    throw new Error(`The employee with dni ${paramDni} does not exists`);
  }

  const employee = await getEmployeeByDni(dni);
  if (employee) {
    throw new Error(`The employee with dni ${dni} already exists`);
  }
};

const createEmployeeValidation = async (
  dni,
  name,
  birthDate,
  isDeveloper,
  description,
  role
) => {
  if (validateEmptyFields([name, dni, birthDate, description, role])) {
    throw new Error("Complete all fields");
  }
  if (validateDni(dni)) {
    throw new Error("The DNI must be a valid number");
  }

  if (typeof isDeveloper != "boolean") {
    throw new Error("isDeveloper must be boolean");
  }

  if (validateDate(birthDate)) {
    throw new Error("The birth date must be a valid date");
  }

  const employee = await getEmployeeByDni(dni);
  if (employee) {
    throw new Error(`The employee with dni ${dni} already exists`);
  }
};

function validateDni(dni) {
  return (
    isNaN(parseInt(dni)) ||
    parseInt(dni) < 10000000 ||
    parseInt(dni) != parseFloat(dni) ||
    parseInt(dni) >= 100000000
  );
}

function validateDate(birthDate) {
  return (
    isNaN(new Date(birthDate).getTime()) ||
    new Date(birthDate) > new Date() ||
    new Date("1900-01-01") > new Date(birthDate)
  );
}

function validateEmptyFields(fields) {
  return fields.some((field) => {
    return typeof field == "undefined" || field.trim().length == 0;
  });
}

export {
  createEmployeeValidation,
  updateEmployeeValidation,
  dniEmployeeValidation,
};
