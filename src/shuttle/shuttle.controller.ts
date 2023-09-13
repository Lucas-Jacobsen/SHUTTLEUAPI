import { Request ,RequestHandler, Response} from 'express';
import { Shuttle } from './shuttle.model';
import * as ShuttleDao from './shuttle.dao';
import { OkPacket } from 'mysql';
import { parse } from 'dotenv';'@types/cors'


export const readShuttles: RequestHandler =async (req: Request, res: Response) => 
{
 try
 {
    let shuttle;
    let shuttleId = parseInt(req.query.shuttleId as string);

    console.log(shuttleId);

    if(Number.isNaN(shuttleId))
    {
        shuttle = await ShuttleDao.readShuttles();
    }
    else
    {
        shuttle = await ShuttleDao.readShuttlesByShuttleId(shuttleId);
    }
    res.status(200).json(shuttle)

 }   
 catch(error)
 {
    res.status(500).json({message: 'There was an error when fetching shuttles'});

 }
}
export const createShuttle: RequestHandler =async (req: Request, res: Response) => 
{
    try
    {
    const OkPacket: OkPacket = await ShuttleDao.createShuttle(req.body);
    console.log(req.body);
    res.status(200).json(OkPacket);
    }
    catch(error)
    {
        res.status(500).json({message: 'There was an error when creating shuttle'});

    }
}
export const updateShuttle: RequestHandler =async (req: Request, res: Response) => 
{
    try
    {
        const OkPacket: OkPacket = await ShuttleDao.updateShuttle(req.body);

        console.log(req.body);
        req.body.shuttle(async(shuttle: Shuttle, index: number) =>
        {
            try
            {
                await ShuttleDao.updateShuttle(shuttle);
            }
            catch(error)
            {
                res.status(500).json({message: 'Error updated'});
            }
            res.status(200).json(OkPacket);
            
        })
    }
    catch(error)
    {
        res.status(500).json({message: 'There was an error when updating shuttle'});
    }
}
export const deleteShuttle: RequestHandler =async (req: Request, res: Response) => 
{
    try
    {
     
        let shuttleId = parseInt(req.params.shuttleId as string);

        console.log('equipmentId', shuttleId);
        if(!Number.isNaN(shuttleId))
        {
            const response = await ShuttleDao.deleteShuttle(shuttleId);
            res.status(200).json(response);

        }
        
       
    }
    catch(error)
    {
        console.error('[shuttle.controller][deleteShuttle][Error]', error);
        res.status(500).json({message: 'There was an error when deleting shuttle'}); 
    }
};