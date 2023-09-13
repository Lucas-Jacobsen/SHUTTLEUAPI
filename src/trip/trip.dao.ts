import { OkPacket } from "mysql";
import { execute } from "../services/mysqlconnector";
import { Trip } from "./trip.model";
import {tripQueries} from './trip.queries';

export const readTrip = async() => 
{
    console.log("In readTrips DAO");

    return execute<Trip[]>(tripQueries.readTrips, [])
};

export function readTripsByTripId(tripId: number) : any {
    console.log("In readTripsByTripsId DAO");
    return execute<Trip[]>(tripQueries.readTripsByTripId, [tripId]);
}

export const createTrip =async (trip : Trip) => 
{
    console.log("In createTrip DAO");

    return execute<OkPacket>(tripQueries.createTrip, [trip.id, trip.shuttle, trip.pickup, trip.dropoff, trip.pax, trip.dur])
};

export function updateTrip(trip: Trip): OkPacket | PromiseLike<OkPacket> 
{
    console.log("In updateTrip DAO");
    return execute<OkPacket>(tripQueries.updateTrip, [trip.id, trip.shuttle, trip.pickup, trip.dropoff, trip.pax, trip.dur])
};

export function deleteShuttle(tripId: number)
{
    console.log("In deleteTrip DAO");

    return execute<OkPacket>(tripQueries.deleteTrip, [tripId])
};