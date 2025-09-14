import { Router } from "express";
import { customerController } from "../controllers/Customer.controller";
import { validationCustomer } from "../validations/customerValidation";
const router = Router();

router.post('/create',  validationCustomer ,customerController.create);
router.get('/',customerController.customersGetAll);
router.post('/update/:id' , customerController.customerUpdate);
router.get('/:id',customerController.customerByID);
router.delete('/delete/:id', customerController.customerDelete);

export default router