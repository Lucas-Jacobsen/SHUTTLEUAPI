import { Router } from 'express';
import * as ShuttleController from './shuttle/shuttle.controller';
import * as TripController from './trip/trip.controller';
import * as bldgController from './bldg/bldg.controller';
import { readBldg } from './bldg/bldg.dao';
import { shuttletripQueries } from './shuttletrip/shuttletrip.queries';
import * as ShuttleTripController from './shuttletrip/shuttletrip.controller';


const router = Router();

router 
    .route('/shuttle')
    .get(ShuttleController.readShuttles);
router
    .route('/shuttle')
    .post(ShuttleController.createShuttle);
router
    .route('/shuttle')
    .put(ShuttleController.updateShuttle);
router
    .route('/shuttle/:id')
    .delete(ShuttleController.deleteShuttle);
router 
    .route('/trip')
    .get(TripController.readTrips);
router
    .route('/trip')
    .post(TripController.createTrip);
router
    .route('/trip')
    .put(TripController.updateTrip);
router
    .route('/trip/:id')
    .delete(TripController.deleteTrip);
router 
    .route('/bldg')
    .get(bldgController.readBldg);
router
    .route('/shuttletrip')
    .get(ShuttleTripController.readShuttleTrip);

export default router;