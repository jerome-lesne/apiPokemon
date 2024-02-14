const trainerRouter = require("express").Router();
const {
    getTrainers,
    setTrainer,
    getTrainer,
    editTrainer,
    deleteTrainer,
    getTrainerPoke,
} = require("../controllers/trainerController");

// Get all
trainerRouter.get("/trainer", getTrainers);
// Get One
trainerRouter.get("/trainer/:id", getTrainer);
// Get one with all his pokemons
trainerRouter.get("/trainer-poke/:id", getTrainerPoke);
// Set New
trainerRouter.post("/trainer", setTrainer);
// Update One
trainerRouter.put("/trainer/:id", editTrainer);
// Delete one
trainerRouter.delete("/trainer/:id", deleteTrainer);

module.exports = trainerRouter;
