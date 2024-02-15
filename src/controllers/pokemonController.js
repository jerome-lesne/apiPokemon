const pokemonModel = require("../models/pokemonModel");
const trainerModel = require("../models/trainerModel");

const getPokes = async (req, res) => {
    try {
        const pokemon = await pokemonModel.find();
        res.json(pokemon);
    } catch (e) {
        res.json(e);
    }
};

const getPoke = async (req, res) => {
    try {
        const pokemon = await pokemonModel.findOne({ _id: req.params.id });
        res.json(pokemon);
    } catch (e) {
        res.json(e);
    }
};

const setPoke = async (req, res) => {
    try {
        trainer = trainerModel.findOne({ _id: req.params.idTrainer });
        if (trainer) {
            const newPoke = new pokemonModel(req.body);
            newPoke.validateSync();
            await newPoke.save();
            await trainerModel.updateOne(
                { _id: req.params.idTrainer },
                { $push: { pokemon: newPoke.id } },
            );
            res.json("pokemon created");
        } else {
            res.json("trainer not found");
        }
    } catch (e) {
        res.json(e);
    }
};

const editPoke = async (req, res) => {
    try {
        await pokemonModel.updateOne({ _id: req.params.id }, req.body);
        res.json("pokemon updated");
    } catch (e) {
        res.json(e);
    }
};

const deletePoke = async (req, res) => {
    try {
        const trainer = await trainerModel.findOne({
            pokemon: req.params.idPokemon,
        });
        if (trainer) {
            await trainerModel.updateOne(
                { $in: { pokemon: req.params.idPokemon } },
                { $pull: { pokemon: req.params.idPokemon } },
            );
            await pokemonModel.deleteOne({ _id: req.params.idPokemon });
            res.json("pokemon deleted");
        } else {
            res.json("trainer not found");
        }
    } catch (e) {
        res.json(e);
    }
};

module.exports = {
    setPoke,
    getPokes,
    getPoke,
    editPoke,
    deletePoke,
};
