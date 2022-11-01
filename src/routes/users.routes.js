import { Router } from "express";
import {
  getUsers,
  createNewUser,
  getUserById,
  
} from "../controllers/users.controller";

const router = Router();

router.get("/users", getUsers);

router.post("/users", createNewUser);

router.get("/users/:id", getUserById);


export default router;