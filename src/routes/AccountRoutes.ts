import { Router } from "express";
import { accountController } from "../controllers/Account.controller";

const router = Router();

router.post('/create', accountController.create);

export default router