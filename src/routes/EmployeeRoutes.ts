import { Router } from "express";
import { employeeController } from "../controllers/Employee.controller";
import { validationEmployees } from "../validations/employeeValidation";

const router = Router();

router.post('/create' , validationEmployees , employeeController.create)


export default router