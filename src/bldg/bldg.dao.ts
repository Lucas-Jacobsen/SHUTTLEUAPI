import { OkPacket } from "mysql";
import { execute } from "../services/mysqlconnector";
import {Bldg} from "./bldg.model";
import {bldgQueries} from './bldg.queries';

export const readBldg = async() => 
{
    console.log("In readBldg DAO");

    return execute<Bldg[]>(bldgQueries.readBldg, [])
};

export function readBldgByNumber(bldgNumber: number) : any {
    console.log("In readBldgByNumber DAO");
    return execute<[Bldg]>(bldgQueries.readBldgByNumber, [bldgNumber]);
}
