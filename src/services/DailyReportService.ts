import DailyReportModel from '../models/DailyReport'
import { Op } from 'sequelize';
import { createDailyReportProps, IDailyReport } from '../types/dailyReport';

export const dailyReportService = {
    async createReport(data:createDailyReportProps){
        const {reportDate,totalTransactions,totalVolume,currencyBreakdown,accountActivity} = data
        const report = await DailyReportModel.create({
            reportDate:reportDate ||new Date(),
            totalTransactions,
            totalVolume,
            currencyBreakdown,
            accountActivity,
        });
        return report
    },
    async updateReport(amount:Number , currency:string){
        const today = new Date().toISOString().split("T")[0] // YYYY-MM-DD

        let report = await DailyReportModel.findOne({where:{reportDate:today}})
        if(!report){
            report = await DailyReportModel.create({
                reportDate: today,
                totalTransactions:0,
                totalVolume:0,
                currencyBreakdown:{},
                accountActivity:{},
            })
        }
        report.totalTransactions += 1;
        report.totalVolume = Number(report.totalVolume) + Number(amount);

        const breakdown: any = report.currencyBreakdown || {};
        breakdown[currency] = (breakdown[currency] || 0) + Number;
        report.currencyBreakdown = breakdown;
        await report.save();
        return report
    },
    async getReport(){
        const reports = await DailyReportModel.findAll();
        return reports
    },
    async getReportById(id:string){
        const report = await DailyReportModel.findByPk(id);
        return report
    },
    async deleteReport(id:string){
        const reportDeleted = await DailyReportModel.destroy({where:{id}});
        return reportDeleted
    },
    async deleteOldReports(){
        const cutoff = new Date();
        cutoff.setDate(cutoff.getDate()-1) // 24 hour before
        const deleted  = await DailyReportModel.destroy({
            where:{
                createdAt:{
                    [Op.lt]:cutoff
                }
            }
        });
        return deleted
    }
}