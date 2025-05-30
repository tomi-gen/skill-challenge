import { getRoles } from "./rolesServices.js";

const getRolesController = async (req, res) => {
  try {
    const roles = await getRoles();

    if (!roles) {
      return res.status(404).json({ message: "No roles found" });
    }
    return res.status(200).json(roles);
  } catch (error) {
    console.error("Error while fetching roles:", error.message);
    return res
      .status(500)
      .json({ message: "Server error while fetching roles" });
  }
};

export { getRolesController };
