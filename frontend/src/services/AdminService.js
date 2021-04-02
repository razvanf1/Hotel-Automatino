import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8080/api/v1/admins/login";

class AdminServices{
    getAdmin(user){
        return axios.post(ADMIN_API_BASE_URL, user);
    }

}

export default new AdminServices();