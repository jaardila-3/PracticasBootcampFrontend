import mongoose from "mongoose"; // ES6
//const mongoose = require("mongoose");// CommonJS
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

//dotenv configuration
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

const { PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME } = process.env;
//const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`;
//conexion mongodb nodejs 2.2.12, el DNS mio no permite conexion al dominio srv de las versiones superiores
const MONGO_URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@ac-d7zwzlz-shard-00-00.tgmtfzp.mongodb.net:27017,ac-d7zwzlz-shard-00-01.tgmtfzp.mongodb.net:27017,ac-d7zwzlz-shard-00-02.tgmtfzp.mongodb.net:27017/?ssl=true&replicaSet=atlas-vakvuk-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose
  .connect(MONGO_URI, {
    dbName: "sample_training",
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then((db) => console.log("connected database"))
  .catch((err) => console.log("error connecting", err));

export default mongoose; // ES6
//module.exports = mongoose; // CommonJS
