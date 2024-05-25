import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/users.controllers.js";

const router = Router();

router.get("/", getUsers);

router.get("/:id",getUserById);

router.post("/", createUser);

router.delete("/:id", deleteUser);

router.put("/:id", updateUser);


export default router;