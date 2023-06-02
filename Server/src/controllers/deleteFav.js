const Favorite = require("../models/Favorite");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;

    await Favorite.destroy({ where: { id } });

    const favorites = await Favorite.findAll();

    res.json(favorites);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al eliminar el personaje favorito" });
  }
};

module.exports = deleteFav;
