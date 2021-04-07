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
        return axios.get(GUEST_API_BASE_URL + '/search?' + params);
    }

}

export default new GuestServices();