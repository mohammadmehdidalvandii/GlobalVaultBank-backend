import { Router } from "express";
import { accountController } from "../controllers/Account.controller";
import { validationAccount } from "../validations/accountValidation";

const router = Router();

router.post('/create',  validationAccount ,accountController.create);
router.get('/', accountController.accountGetAll);
router.get('/:id', accountController.accountGetById);
router.delete('/delete/:id',accountController.delete);
router.patch('/update/:id', accountController.update);

export default router