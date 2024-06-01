import { Router } from "express";
import UserController from "../controllers/usuarios.controller.js";
import {
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
} from "../validators/usuario.validator.js";

const router = Router();

router.get("/", UserController.index);
router.get("/:id", UserController.show);
router.post("/", createUserValidator, UserController.create);
router.put("/:id", updateUserValidator, UserController.update);
router.delete("/:id", deleteUserValidator, UserController.delete);

export default router;
