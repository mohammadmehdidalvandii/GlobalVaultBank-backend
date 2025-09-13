import { Router } from "express";
import { customerController } from "../controllers/Customer.controller";
const router = Router();

router.post('/create', customerController.create);
router.get('/',customerController.customersGetAll);
router.post('/update/:id' , customerController.customerUpdate);

export default router