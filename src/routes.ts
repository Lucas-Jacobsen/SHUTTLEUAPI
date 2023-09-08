import { Router } from 'express';
import * as ShuttleController from './shuttle/shuttle.controller';
import * as TripController from './trip/trip.controller';

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


export default router;