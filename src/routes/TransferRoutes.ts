import { Router } from "express";
import { transferController } from "../controllers/Transfer.controller";

const router = Router();

router.get('/',transferController.getTransfer);
router.post('/create', transferController.create);

export default router