const Favorite = require("../models/Favorite");

const postFav = async (req, res) => {
  try {
    const { name, origin, status, specises, gender } = req.body;
    if (!name || !origin || !status || !specises || !gender) {
      return res.status(401).send("Faltan datos");
    }
    const [favorite, created] = await Favorite.findOrCreate({
      where: { name },
      defaults: {
        origin,
        status,
        image,
        species,
        gender,
      },
    });

    const favorites = await Favorite.findAll();
    res.json(favorites);
  } catch (error) {
    res.status(500).json({ message: "Error al guardar el personaje favorito" });
  }
};

module.exports = postFav;
