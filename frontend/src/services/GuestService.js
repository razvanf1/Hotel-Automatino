import axios from 'axios';

const GUEST_API_BASE_URL = "http://localhost:8080/api/v1/guests";

class GuestServices{
    getGuest(user){
        return axios.post(GUEST_API_BASE_URL + "/login", user);
    }

}

export default new GuestServices();