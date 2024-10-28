import { Router } from "express";

import { getTeams } from "../controllers/teamController.js";

const router = Router();

// FIXME: Create a createTeam route
router.get("/", getTeams);

export default router;
