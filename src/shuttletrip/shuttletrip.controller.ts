
import { Request ,RequestHandler, Response} from 'express';
import * as ShuttleDao from './shuttletrip.dao';
import { OkPacket } from 'mysql';
import { parse } from 'dotenv';'@types/cors'



export const readShuttleTrip: RequestHandler =async (req: Request, res: Response) => 
{
 try
 {
    let shuttletrip;

        shuttletrip = await ShuttleDao.readShuttles();
    
    
    res.status(200).json(shuttletrip)

 }   
 catch(error)
 {
    res.status(500).json({message: 'There was an error when fetching ShuttleTrip'});

 }
}