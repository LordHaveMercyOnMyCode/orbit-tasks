import { Router } from "express";

import {
    getUser,
    getUsers,
    createUser,
} from "../controllers/userController.js";

const router = Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:cognitoId", getUser);

export default router;
