import { Router } from "express";
import { transferController } from "../controllers/Transfer.controller";

const router = Router();

router.post('/create', transferController.create);

export default router