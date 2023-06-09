import express from "express";
import database from "./database.js"; // ES6
//require("./database"); // CommonJS
import postRouter from "./routes/postRoute.js";
import morgan from "morgan";

const PORT = 3001;
const app = express();

// Global Middlewares
//app.use(express.json());
app.use(morgan('dev')); //registra información sobre las solicitudes HTTP

// Routes
app.use('/api/', postRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});