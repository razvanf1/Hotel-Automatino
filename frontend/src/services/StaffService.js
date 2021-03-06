import axios from 'axios';

const STAFF_API_BASE_URL = "http://localhost:8080/api/v1/staff";

class StaffServices{
    getStaff(user){
        return axios.post(STAFF_API_BASE_URL + '/login', user);
    }

    getRooms(){
        return axios.get(STAFF_API_BASE_URL + '/rooms');
    }

}

export default new StaffServices();