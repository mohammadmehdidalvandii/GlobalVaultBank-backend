import cron from 'node-cron';
import { dailyReportService } from '../services/DailyReportService';

cron.schedule('0 0 * * *',async()=>{
    try{
        const deleted = await dailyReportService.deleteOldReports();
        console.log(`[CRON JOB] Deleted ${deleted} old daily reports`);
    }catch(error:any){
        console.log(`[CRON JOB ERROR ]`,error);
    }
})