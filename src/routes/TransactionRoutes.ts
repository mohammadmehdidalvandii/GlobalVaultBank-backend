import { Router } from "express";
import { transactionController } from "../controllers/Transaction.controller";

const router = Router();

router.get('/', transactionController.transactionGetAll);
router.get('/:id',transactionController.transactionGetId);
router.post('/create', transactionController.create);

export default router