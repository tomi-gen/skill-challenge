import { getRolesRepository } from "./rolesRepository.js";

const getRoles = async () => {
  try {
    const roles = await getRolesRepository();
    return roles;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getRoles };
