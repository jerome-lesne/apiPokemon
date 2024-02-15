const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const trainerRouter = require("./src/routes/trainerRoute");
const pokemonRouter = require("./src/routes/pokemonRoute");

const app = express();
const port = 3000;
const db = "mongodb://localhost:27017/apiPokemon";

app.use(cors());
app.use(express.json());

app.use(trainerRouter);
app.use(pokemonRouter);

mongoose.set("strictQuery", true);
mongoose.connect(db);

app.listen(port, () => console.log(`App listening to port ${port}`));
