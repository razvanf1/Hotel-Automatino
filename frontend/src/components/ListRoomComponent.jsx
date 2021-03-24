import React, { Component } from 'react';
import RoomService from '../services/RoomService';

class ListRoomComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            rooms: []
        }
    }


    componentDidMount(){
        RoomService.getRooms().then((res) => {
            this.setState({rooms: res.data});
        })
    }
    render() {
        return (
            <div>
                <h2 className = "text-center">Room List</h2>
                <div className = "row">
                    <table className = "table table-striped table-bordered">

                        <thread>
                            <tr>
                                <th>Room id</th>
                                <th>Room status</th>
                                <th>Room type</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thread>

                        <tbody>
                            {
                                this.state.rooms.map(
                                    room => 
                                    <tr key = {room.id}>
                                        <td>{room.status}</td>
                                        <td>{room.type}</td>
                                        <td>{room.price}</td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

export default ListRoomComponent;