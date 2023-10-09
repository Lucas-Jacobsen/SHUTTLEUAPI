export const shuttletripQueries = 
{
    readShuttleTrip : 
    `SELECT
    s.shuttleId,
    s.lat,
    s.lon,
    t.dropoff,
    t.pax,
    t.dur
FROM
    shuttle AS s
INNER JOIN
    trip AS t
ON
    s.shuttleId = t.shuttleId;
`,

 



   
}
