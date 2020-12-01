const express = require("express"); // requiero modulo nativo express
const router = express.Router(); // ejecuto en la variable router el metodo .Router de express

const heroesController = require("../controllers/heroesControllers"); // requiero el modulo de heroesControllers.js en donde realice la logica de cada uno de los metodos utilizados en la parte de abajo

router.get("/heroes", heroesController.lista);

router.get("/heroes/detalle/:id", heroesController.detalle);

router.get("/heroes/bio/:id/:ok?", heroesController.detalleConBio);

module.exports = router;