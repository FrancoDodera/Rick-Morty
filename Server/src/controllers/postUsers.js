const { User } = require("../models/User");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Faltan datos");
    }
    const user = await User.findOrCreate({
      where: { email, password },
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};
