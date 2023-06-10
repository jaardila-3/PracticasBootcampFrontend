import express from "express";
import cors from "cors";
import database from "./database.js"; // DB connection, do not delete
import postRouter from "./routes/postRoute.js";
import morgan from "morgan";

const PORT = 3001;
const app = express();

// Global Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); //registra información sobre las solicitudes HTTP en consola de nodejs

// Routes
app.get("/", (req, res) => res.send("API is running"));
app.use('/api/posts/', postRouter);

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});