const { getCharById } = require("../Controllers/getCharById");
const login = require("../Controllers/login");
const deleteFav = require("../Controllers/deleteFav");
const postFav = require("../Controllers/postFav");
const postUser = require("../Controllers/postUsers");

const router = require("express").Router();

router.get("/character/:id", getCharById);

router.get("/login", login);

router.post("/login", postUser);

router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
