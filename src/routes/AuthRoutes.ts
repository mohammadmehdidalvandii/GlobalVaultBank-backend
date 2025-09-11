import { Router } from "express";
import {authController} from '../controllers/Auth.controller';
const router = Router();

router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);



export default router