import { Router } from "express";
import { customerController } from "../controllers/Customer.controller";
const router = Router();

router.post('/create', customerController.create)

export default router