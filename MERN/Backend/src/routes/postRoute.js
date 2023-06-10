import { Router } from "express";
import postCtrl from "../controllers/postController.js";

const postRouter = Router();

// Read All
postRouter.get("/", postCtrl.getAll);

// Read One
postRouter.get("/:id", postCtrl.getOne);

// Create
postRouter.post("/", postCtrl.create);

// Update
postRouter.patch("/:id", postCtrl.update);

// Delete
postRouter.delete("/:id", postCtrl.delete);

export default postRouter;