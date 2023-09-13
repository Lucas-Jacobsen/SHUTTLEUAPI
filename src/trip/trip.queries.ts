export const tripQueries = 
{
   
    readTrips : 
    `SELECT * FROM trip`,

    readTripsByTripId : 
        ` Select * FROM trip WHERE trip.id LIKE ?`,

    createTrip : 
    `INSERT INTO trip(shuttle, pickup, dropff, pax, dur) VALUES (?,?,?,?,?)`,

    updateTrip : 
    `Update trip SET shuttle=?, pickup=?, dropoff=?, pax=?, dur=? WHERE id=?`,
    
    deleteTrip : 
    `DELETE FROM trip WHERE id=?`






   
}