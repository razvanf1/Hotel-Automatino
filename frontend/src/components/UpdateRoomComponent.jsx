import React, { Component } from 'react';
import RoomService from '../services/RoomService';

class UpdateRoomComponent extends Component {
        constructor(props)
        {
            super(props)
            this.state = {
                id: this.props.match.params.id,
                number: '',
                type: '',
                price: ''
            }  
    
            this.changeNumberHandler = this.changeNumberHandler.bind(this);
            this.changeTypeHandler = this.changeTypeHandler.bind(this);
            this.changePriceHandler = this.changePriceHandler.bind(this);
            this.changeStatusHandler = this.changeStatusHandler.bind(this);

            this.editRoom = this.editRoom.bind(this);
        }

        componentDidMount()
        {
            RoomService.getRoomById(this.state.id).then( (res) => {
                let room = res.data;
                this.setState({number: room.number,
                    type: room.type,
                    status: room.status,
                    price: room.price
                });
            });
        }
    
        editRoom = (event) => {
            event.preventDefault();
            let room = {number: this.state.number, type: this.state.type, price: this.state.price};
            console.log('room => ' + JSON.stringify(room));
            RoomService.updateRoom(room, this.state.id).then( res => {
                this.props.history.push('/admin');
            });
        }
    
        changeNumberHandler = (event) => {
            this.setState({number: event.target.value});
        }
    
        changeTypeHandler = (event) => {
            this.setState({type: event.target.value});
        }
    
        changePriceHandler = (event) =>{
            this.setState({price: event.target.value});
        }

        changeStatusHandler = (event) =>{
            this.setState({status: event.target.value});
        }
    
        cancel(){
            this.props.history.push('/admin');
        }
    
        render() {
            return (
                <div>
                    <div className = "container"> 
                        <div className = "row mt-3">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Edit Room</h3>
                                <div className="card-body">
                                    <form>
                                        <div className ="form-group">
                                            <label> Room Number: </label>
                                            <input placeholder="Room Number" name="number" className="form-control" 
                                                value={this.state.number} onChange={this.changeNumberHandler}/>
                                        </div>
                                        <div className ="form-group">
                                            <label >Room Type: </label>
                                            <input placeholder="Room Type" name="type" className="form-control" 
                                                value={this.state.type} onChange={this.changeTypeHandler}/>
                                        </div>
                                        <div className ="form-group">
                                            <label> Room Status: </label>
                                            <input placeholder="Room Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>
                                        <div className ="form-group">
                                            <label> Room Price: </label>
                                            <input placeholder="Room Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>
    
                                        <button className="btn btn-success" onClick={this.editRoom}>Save</button>
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
    

export default UpdateRoomComponent;