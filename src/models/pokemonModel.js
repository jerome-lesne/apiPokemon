const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "trainer name required"],
    },
    type: {
        type: String,
        required: [true, "type required"],
    },
    level: {
        type: Number,
        required: [true, "level required"],
    },
    attack: {
        type: Array,
        required: [true, "attack required"],
    },
});

const pokemonModel = mongoose.model("pokemon", pokemonSchema);

module.exports = pokemonModel;
