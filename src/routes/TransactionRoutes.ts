import { Router } from "express";
import { transactionController } from "../controllers/Transaction.controller";

const router = Router();

router.post('/create', transactionController.create);

export default router