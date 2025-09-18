import { dailyReportService } from "../services/DailyReportService";
import { Req , Res } from "../types/express";

export const dailyReportController = {
    async create(req:Req ,res:Res){
        try{
            const data = req.body;
            const report = await dailyReportService.createReport(data);
            res.status(201).json({
                message:"Daily report created successfully",
                data:report
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed to created dailyRePort error server",
                status:500,
                error:error.message
            })
        }
    },
    async getAll(req:Req , res:Res){
        try{    
            const reports = await dailyReportService.getReport();
            res.status(200).json({
                message:"Reports get all successfully",
                status:200,
                data:reports,
            })
        } catch(error:any){
            res.status(500).json({
                message:"Failed to fetch reports server error",
                status:500,
                error:error.message,
            })
        }
    }
}