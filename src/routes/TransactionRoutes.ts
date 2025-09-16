import { Router } from "express";
import { transactionController } from "../controllers/Transaction.controller";
import { validationTransaction } from "../validations/transactionValidation";

const router = Router();

router.get('/', validationTransaction ,transactionController.transactionGetAll);
router.get('/:id',transactionController.transactionGetId);
router.post('/create', transactionController.create);
router.put('/approve/:id',transactionController.approve);
router.put('/reject/:id',transactionController.reject);

export default router