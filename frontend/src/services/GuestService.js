import axios from 'axios';

const GUEST_API_BASE_URL = "http://localhost:8080/api/v1/guests";

class GuestServices{
    getGuest(user){
        return axios.post(GUEST_API_BASE_URL + "/login", user);
    }
    
    getReservations(id){
        return axios.get(GUEST_API_BASE_URL + "/reservations/" + id);
    }

    searchRooms(reservation){
        const params = new URLSearchParams(reservation);
        console.log(GUEST_API_BASE_URL + '/search?' + params);
        return axios.get(GUEST_API_BASE_URL + '/search?' + params);
    }

    addReservation(reservation)
    {
        const params = new URLSearchParams(reservation);
        console.log(GUEST_API_BASE_URL + '/reservations?' + params);
        return axios.post(GUEST_API_BASE_URL + '/reservations?' + params);
    }

    deleteReservation(reservationId){
        return axios.delete()

    }

}

export default new GuestServices();