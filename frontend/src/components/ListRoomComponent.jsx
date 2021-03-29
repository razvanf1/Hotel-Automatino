import React, { Component } from 'react';
import RoomServices from '../services/RoomService'

class ListRoomComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            rooms: []
        }
        this.addRoom = this.addRoom.bind(this);
        this.editRoom = this.editRoom.bind(this);

    }

    editRoom(id){
        this.props.history.push(`admin/update-room/${id}`);
    }

    componentDidMount(){
        RoomServices.getRooms().then((res) => {
            this.setState({rooms: res.data});
        })
    }

    addRoom(){
        this.props.history.push('/admin/add-room');
    }
    render() {
        return (
            <div>
                <h2 className="text-center">Rooms List</h2>

                <div className="row">
                    <button className = "btn btn-primary" onClick={this.addRoom}>Add Room</button>
                </div>

                <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Room Number</th>
                                    <th> Room Status</th>
                                    <th> Room Type</th>
                                    <th> Room Price</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.rooms.map(
                                        room => 
                                        <tr key = {room.id}>
                                             <td> {room.number}</td>
                                             <td> {room.status} </td>   
                                             <td> {room.type}</td>
                                             <td> {room.price}</td>
                                             <td>
                                                 <button className ="btn btn-primary" onClick = { () => this.editRoom(room.id)} >Edit </button>
                                                 <button  className="btn btn-danger" style={{marginLeft: "10px"}}>Delete </button>
                                                 <button style={{marginLeft: "10px"}} className="btn btn-info">View </button>
                                             </td>
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