export const shuttleQueries = 
{
    readShuttles : 
    `SELECT * FROM shuttle`,

    readShuttlesByShuttleId : 
        ` Select * FROM shuttle WHERE Shuttleid LIKE ?`,

    createShuttle : 
    'INSERT INTO shuttle (`type`, `code`, status, lat, lon) VALUES (?,?,?,?,?)',


    updateShuttle : 
    `Update shuttle SET type=?, code=? WHERE Shuttleid=?`,
    
    deleteShuttle : 
    `DELETE FROM shuttle WHERE Shuttleid=?`



   
}