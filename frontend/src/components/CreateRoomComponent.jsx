import React, { Component } from 'react';
import RoomService from '../services/RoomService';

class CreateRoomComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            roomNumber: '',
            roomType: '',
            roomPrice: ''
        }  

        this.changeRoomNumberHandler = this.changeRoomNumberHandler.bind(this);
        this.changeRoomTypeHandler = this.changeRoomTypeHandler.bind(this);
        this.changeRoomPriceHandler = this.changeRoomPriceHandler.bind(this);
        this.saveRoom = this.saveRoom.bind(this);
    }

    saveRoom = (event) => {
        event.preventDefault()
        let room = {roomNumber: this.state.roomNumber, roomType: this.state.roomType, roomPrice: this.state.roomPrice};
        console.log('room => ' + JSON.stringify(room));

        RoomService.createRoom(room).then(res => {
            this.props.history.push('/admin');
        })
    }

    changeRoomNumberHandler = (event) => {
        this.setState({roomNumber: event.target.value});
    }

    changeRoomTypeHandler = (event) => {
        this.setState({roomType: event.target.value});
    }

    changeRoomPriceHandler = (event) =>{
        this.setState({roomPrice: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin');
    }


    render() {
        return (
            <div>
                <div className = "container"> 
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Room</h3>
                            <div className="card-body">
                                <form>
                                    <div className ="form-group">
                                        <label> Room Number: </label>
                                        <input placeholder="Room Number" name="roomNumber" className="form-control" 
                                            value={this.state.roomNumber} onChange={this.changeRoomNumberHandler}/>
                                    </div>
                                    <div className ="form-group">
                                        <label >Room Type: </label>
                                        <input placeholder="Room Type" name="roomType" className="form-control" 
                                            value={this.state.roomType} onChange={this.changeRoomTypeHandler}/>
                                    </div>
                                    <div className ="form-group">
                                        <label> Room Price: </label>
                                        <input placeholder="Room Price" name="roomPrice" className="form-control" 
                                            value={this.state.roomPrice} onChange={this.changeRoomPriceHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveRoom}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateRoomComponent;