import { Router } from "express";
import { jogoController } from "../controller/jogo.Controller.js";

export const jogoRouter = Router();

jogoRouter.get("/", jogoController.getAll);
jogoRouter.get("/:id", jogoController.getById);
jogoRouter.post("/", jogoController.create);
jogoRouter.delete("/:id", jogoController.delete);
jogoRouter.patch("/:id", jogoController.updatePatch);
