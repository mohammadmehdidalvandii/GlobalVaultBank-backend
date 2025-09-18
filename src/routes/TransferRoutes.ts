import { Router } from "express";
import { transferController } from "../controllers/Transfer.controller";
import { validationTransfer } from "../validations/transferValidation";

const router = Router();

router.get('/',transferController.getTransfer);
router.get('/:id',transferController.getTransferId);
router.post('/create', validationTransfer ,transferController.create);

export default router