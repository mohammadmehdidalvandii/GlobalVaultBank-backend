import { Router } from "express";
import { accountController } from "../controllers/Account.controller";

const router = Router();

router.post('/create', accountController.create);
router.get('/', accountController.accountGetAll);
router.get('/:id', accountController.accountGetById);
router.delete('/delete/:id',accountController.delete)

export default router