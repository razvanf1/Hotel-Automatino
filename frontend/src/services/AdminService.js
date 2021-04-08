import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/api/v1/admins";

class AdminServices{
    getAdmin(user){
        return axios.post(ADMIN_API_BASE_URL + '/login', user);
    }

    sendMail(mail){
        let params = new URLSearchParams(mail);
        console.log(ADMIN_API_BASE_URL + '/sendoffers?' + params);
        return axios.post(ADMIN_API_BASE_URL + '/sendoffers?' + params)
    }

    getReservations(timeInterval){
        let params = new URLSearchParams(timeInterval);
        console.log(ADMIN_API_BASE_URL + '/reservations?' + params);
        return axios.get(ADMIN_API_BASE_URL + '/reservations?' + params);
    }
}

export default new AdminServices();