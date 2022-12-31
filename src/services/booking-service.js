const axios = require('axios');

const {BookingRepositroy} = require('../repository/index');
const {FLIGHT_SERVICE_PATH} = require('../config/serverConfig');
const { ServiceError } = require('../utils/errors');

class BookingService {
    constructor(){
        this.bookingRepositroy = new BookingRepositroy();
    }
    async createBooking(data){
        try {
            const flightId = data.flightId;
            let getFlightRequestURL = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`
            const flight = await axios.get(getFlightRequestURL);
            return flight;
            
        } catch (error) {
            throw new ServiceError();
        }

    }
}

module.exports = BookingService;