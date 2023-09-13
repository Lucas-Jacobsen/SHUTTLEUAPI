import { Request , Response , NextFunction, application } from "express";
import { v4 as uuidv4 } from 'uuid';    

const getProcessingTimeInMs = (time: [number, number]):string =>{return `${(time[0] * 1000 + time [1] / 1e6).toFixed(2)}ms`}

/*
add logs for an API endpoint    
[id][timestamp] method:url START processing
[id][timestamp] method:url response:statusCode END processing

@Param req Express.Request
@Param res Express.Response
@Param next Express.NextFunction
 */
export default function logger(req: Request, res: Response, next: NextFunction)
{
    //Generate unique id
    const id = uuidv4();    

    //get timestamp
    const now = new Date();
    const timestamp = [now.getFullYear(), '-', now.getMonth() + 1, '-', now.getDate(), ' ', now.getHours(), ':', now.getMinutes(),':', now.getSeconds()].join('');

    //Get API endpoint
    const {method, url} = req;

    //Log start of the execution process 
    const start = process.hrtime();
    const startText = `START:${getProcessingTimeInMs(start)}`;
    const idText = `[${id}]`;
    const timeStampText = `[${timestamp}]`;

    //Show the entry
    console.log(`${idText}${timeStampText} ${method}:${url} ${startText}`);

    //Triggers once a response is sent 
    res.once('finish', () => {
        //log end of execution process
        const end = process.hrtime(start);
        const endText = `END:${getProcessingTimeInMs}`;
        console.log(`${idText}${timeStampText} ${method}:${url} ${res.statusCode} ${endText}`);

    });

    //execute next middleware/event handler
    next();

};