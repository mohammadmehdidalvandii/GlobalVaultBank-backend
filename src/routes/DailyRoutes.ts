import { dailyReportController } from "../controllers/DailyReport.controller";
import { Router } from "express";

const router = Router();
router.get('/',dailyReportController.getAll);
router.get('/:id',dailyReportController.getById)
router.post('/create' , dailyReportController.create);

export default router