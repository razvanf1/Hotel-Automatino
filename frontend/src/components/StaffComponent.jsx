import React, { Component } from 'react';
import LogoutButton from './LogoutButton';
import StaffService from '../services/StaffService'

class StaffComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            rooms: []
        }
    }

    componentDidMount()
    {
        StaffService.getRooms().then((res) => {
                this.setState({rooms: res.data});
            });
    }

    render() {
        return (
                <div>
                    {this.state.rooms.length > 0 &&
                    <div> 
                        <h2 className="text-center">Rooms List</h2>

                        <div className = "row">
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Room Number</th>
                                            <th> Room Status</th>
                                            <th> Room Type</th>
                                            <th> Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.rooms.map(
                                                room => 
                                                <tr key = {room.id}>
                                                    <td> {room.number}</td>                       
                                                    {room.status === 0 ? <td> Empty</td> : <td>Occupied</td>}
                                                    {room.type === 1 ? 
                                                <td>Single</td>
                                                : 
                                                room.type === 2 ?
                                                    <td>Double</td>
                                                    :
                                                        <td>Triple</td>
                                             }                             
                                                    <td>
                                                        <button className ="btn btn-primary" onClick = { () => this.editRoom(room.id)} >Clean Room </button>                                     
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                        </div>
                    </div>
                }
                    
                    <div className="row">
                        <LogoutButton/>
                    </div>
                
                </div>
        );
    }
}

export default StaffComponent;