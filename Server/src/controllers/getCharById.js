const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/${id}`);
    const { name, gender, origin, status, image, species } = response.data;
    if (name) {
      let character = {
        id,
        name,
        gender,
        origin,
        image,
        status,
        species,
      };
      return res.status(200).json(character);
    }
    return res.status(404).send("Not found");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// .get(`${URL}/${id}`)
// .then((result) => result.data)
// .then(({ name, gender, origin, status, image, species }) => {
//   if (name) {
//     let character = {
//       id,
//       name,
//       gender,
//       origin,
//       image,
//       status,
//       species,
//     };
//     return res.status(200).json(character);
//   }
//   return res.status(404).send("Not found");
// })
// .catch((error) => res.status(500).send(error.message));

module.exports = {
  getCharById,
};
