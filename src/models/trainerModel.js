const mongoose = require("mongoose");

const trainerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "trainer name required"],
    },
    age: {
        type: Number,
        required: [true, "age required"],
    },
    pokemon: {
        type: [
            {
                type: mongoose.Schema.ObjectId,
                ref: "pokemon",
            },
        ],
    },
});

const trainerModel = mongoose.model("trainer", trainerSchema);

module.exports = trainerModel;
