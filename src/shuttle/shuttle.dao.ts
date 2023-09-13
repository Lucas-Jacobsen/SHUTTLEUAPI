import { OkPacket } from "mysql";
import { execute } from "../services/mysqlconnector";
import { Shuttle } from "./shuttle.model";
import {shuttleQueries} from './shuttle.queries';

export const readShuttles = async() => 
{
    console.log("In readShuttles DAO");

    return execute<Shuttle[]>(shuttleQueries.readShuttles, [])
};

export function readShuttlesByShuttleId(shuttleId: number) : any {
    console.log("In readShuttlesByShuttleId DAO");
    return execute<Shuttle[]>(shuttleQueries.readShuttlesByShuttleId, [shuttleId]);
}

export const createShuttle =async (shuttle : Shuttle) => 
{
    console.log("In createShuttle DAO");

    return execute<OkPacket>(shuttleQueries.createShuttle, [shuttle.id, shuttle.type,shuttle.code,  shuttle.status,shuttle.lat, shuttle.long])
};

export function updateShuttle(shuttle: Shuttle): OkPacket | PromiseLike<OkPacket> 
{
    console.log("In updateShuttle DAO");
    return execute<OkPacket>(shuttleQueries.updateShuttle, [shuttle.id, shuttle.code, shuttle.lat, shuttle.long, shuttle.status, shuttle.type])

};

export function deleteShuttle(shuttleId: number)
{
    console.log("In deleteShuttle DAO");

    return execute<OkPacket>(shuttleQueries.deleteShuttle, [shuttleId])
};