const getEmployeesController = async (req, res) => {
  try {
    return res.status(200).json("employees");
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export { getEmployeesController };
