
class ShuttleTrip {
    constructor(
        public shuttleId: number,
        public lat: number,
        public lon: number,
        public dropoff: string,
        public pax: number,
        public dur: number
    ) {}
}

export default ShuttleTrip;