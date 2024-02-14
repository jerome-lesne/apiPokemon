const pokemonRouter = require("express").Router();
const {
    setPoke,
    getPokes,
    getPoke,
    editPoke,
    deletePoke,
} = require("../controllers/pokemonController");

// Get all pokemon
pokemonRouter.get("/pokemon", getPokes);
// Get One pokemon
pokemonRouter.get("/pokemon/:id", getPoke);
// Set Pokemon
pokemonRouter.post("/trainer/:idTrainer/pokemon", setPoke);
// Edit Pokemon
pokemonRouter.put("/pokemon/:id", editPoke);
// Delete Pokemon
pokemonRouter.delete("/trainer/:idPokemon/pokemon", deletePoke);

module.exports = pokemonRouter;
