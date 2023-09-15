import { Request ,RequestHandler, Response} from 'express';
import { Bldg } from './bldg.model';
import * as BldgDao from './bldg.dao';
import { OkPacket } from 'mysql';
import { parse } from 'dotenv';'@types/cors'


export const readBldg: RequestHandler =async (req: Request, res: Response) => 
{
 try
 {
    let bldg;
    let bldgNumber = parseInt(req.query.bldgNumber as string);

    console.log(bldg);

    if(Number.isNaN(bldgNumber))
    {
        bldg = await BldgDao.readBldg();
    }
    else
    {
        bldg = await BldgDao.readBldgByNumber(bldgNumber);
    }
    res.status(200).json(bldg)

 }   
 catch(error)
 {
    res.status(500).json({message: 'There was an error when fetching shuttles'});

 }
}
