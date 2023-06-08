import { Router } from "express";
import postCtrl from "../controllers/postController.js";
import crypto from "crypto"; //genera una cadena aleatoria codificada en base64Url.

const postRouter = Router();

// Read All
postRouter.get("/", postCtrl.getAll);

// Create
postRouter.post("/", postCtrl.create);

// Update
postRouter.put("/", postCtrl.update);

// Delete
postRouter.delete("/", postCtrl.delete);

export default postRouter;
