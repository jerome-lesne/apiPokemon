const trainerModel = require("../models/trainerModel");

const getTrainers = async (req, res) => {
    try {
        const trainers = await trainerModel.find();
        res.json(trainers);
    } catch (e) {
        res.json(e);
    }
};

const getTrainer = async (req, res) => {
    try {
        const trainer = await trainerModel.findOne({ _id: req.params.id });
        res.json(trainer);
    } catch (e) {
        res.json(e);
    }
};

const setTrainer = async (req, res) => {
    try {
        const newTrainer = new trainerModel(req.body);
        newTrainer.validateSync();
        await newTrainer.save();
        res.json("trainer saved");
    } catch (e) {
        res.json(e);
    }
};

const editTrainer = async (req, res) => {
    try {
        await trainerModel.updateOne({ _id: req.params.id }, req.body);
        res.json("trainer modified");
    } catch (e) {
        res.json(e);
    }
};

const getTrainerPoke = async (req, res) => {
    try {
        const trainer = await trainerModel
            .findOne({ _id: req.params.id })
            .populate("pokemon");
        res.json(trainer);
    } catch (e) {
        res.json(e);
    }
};

const deleteTrainer = async (req, res) => {
    try {
        await trainerModel.deleteOne({ _id: req.params.id });
        res.json("trainer deleted");
    } catch (e) {
        res.json(e);
    }
};

module.exports = {
    getTrainers,
    getTrainer,
    setTrainer,
    editTrainer,
    deleteTrainer,
    getTrainerPoke,
};
