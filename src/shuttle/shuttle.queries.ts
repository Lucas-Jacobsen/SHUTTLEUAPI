export const shuttleQueries = 
{
    readShuttles : 
    `SELECT * FROM shuttle`,

    readShuttlesByShuttleId : 
        ` Select * FROM shuttle WHERE id LIKE ?`,

    createShuttle : 
    `INSERT INTO shuttle(type, code, status, lat, long) VALUES (?,?,?,?,?)`,

    updateShuttle : 
    `Update shuttle SET type=?, code=? WHERE id=?`,
    
    deleteShuttle : 
    `DELETE FROM shuttle WHERE id=?`



   
}