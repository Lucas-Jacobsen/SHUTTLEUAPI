import { Request ,RequestHandler, Response} from 'express';
import { Trip } from './trip.model';
import * as TripDao from './trip.dao';
import { OkPacket } from 'mysql';
import { parse } from 'dotenv';'@types/cors'


export const readTrips: RequestHandler =async (req: Request, res: Response) => 
{
 try
 {
    let trip;
    let tripId = parseInt(req.query.tripId as string);

    console.log(tripId);

    if(Number.isNaN(tripId))
    {
        trip = await TripDao.readTrip();
    }
    else
    {
        trip = await TripDao.readTripsByTripId(tripId);
    }
    res.status(200).json(trip)

 }   
 catch(error)
 {
    res.status(500).json({message: 'There was an error when fetching Trips'});

 }
}
export const createTrip: RequestHandler =async (req: Request, res: Response) => 
{
    try
    {
    const OkPacket: OkPacket = await TripDao.createTrip(req.body);
    console.log(req.body);
    res.status(200).json(OkPacket);
    }
    catch(error)
    {
        res.status(500).json({message: 'There was an error when creating Trip'});

    }
}
export const updateTrip: RequestHandler =async (req: Request, res: Response) => 
{
    try
    {
        const OkPacket: OkPacket = await TripDao.updateTrip(req.body);

        console.log(req.body);
        req.body.shuttle(async(trip: Trip, index: number) =>
        {
            try
            {
                await TripDao.updateTrip(trip);
            }
            catch(error)
            {
                res.status(500).json({message: 'Error updating'});
            }
            res.status(200).json(OkPacket);
            
        })
    }
    catch(error)
    {
        res.status(500).json({message: 'There was an error when updating Trip'});
    }
}
export const deleteTrip: RequestHandler =async (req: Request, res: Response) => 
{
    try
    {
     
        let tripId = parseInt(req.params.tripId as string);

        console.log(tripId);
        if(!Number.isNaN(tripId))
        {
            const response = await TripDao.deleteShuttle(tripId);
            res.status(200).json(response);

        }
        
       
    }
    catch(error)
    {
        res.status(500).json({message: 'There was an error when deleting trip'}); 
    }
};