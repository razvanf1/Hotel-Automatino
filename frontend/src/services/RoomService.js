import axios from 'axios';

const ROOM_API_BASE_URL = "http://localhost:8080/api/v1/rooms";

class RoomService{

    getRooms(){
        return axios.get(ROOM_API_BASE_URL);
    }

    createRoom(room){
        return axios.post(ROOM_API_BASE_URL, room);
    }

    getRoomById(roomId){
        return axios.get(ROOM_API_BASE_URL + '/' + roomId);
    }

    updateRoom(room, roomId){
        return axios.put(ROOM_API_BASE_URL + '/' + roomId, room);
    }

    deleteRoom(roomId){
        return axios.delete(ROOM_API_BASE_URL + '/' + roomId);
    }

    unlockRoom(roomId){
        return axios.get(ROOM_API_BASE_URL + '/unlock/' + roomId);
    }

}

export default new RoomService();