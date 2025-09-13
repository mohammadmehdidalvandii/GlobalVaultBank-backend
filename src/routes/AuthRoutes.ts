import { Router } from "express";
import {authController} from '../controllers/Auth.controller';
import { authenticateToken } from "../middleware/authenticateToken";
const router = Router();

router.post('/login', authController.login);
router.post('/refresh-token', authController.refreshToken);
router.get('/profile', authenticateToken , authController.getProfile);

export default router