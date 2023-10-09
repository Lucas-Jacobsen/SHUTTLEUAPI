
import { OkPacket } from "mysql";
import { execute } from "../services/mysqlconnector";
import {shuttletripQueries} from './shuttletrip.queries';
import ShuttleTrip from "./shuttletrip.model";

export const readShuttles = async() => 
{
    console.log("In readShuttles DAO");

    return execute<ShuttleTrip[]>(shuttletripQueries.readShuttleTrip, [])
};