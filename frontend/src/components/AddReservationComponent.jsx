import React, { Component } from 'react';
import GuestService from '../services/GuestService';
import auth    from '../services/AuthService';

class AddReservationComponent extends Component {
    constructor(props)
        {
            super(props)
            let authService = auth.getInstance();
            this.state = {
                disponibleRooms: [],
                startDate: '',
                endDate:'',
                roomType:'',
                guestId: authService.getId()
            }  
    
            this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
            this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
            this.changeTypeHandler = this.changeTypeHandler.bind(this);
            this.saveReservation = this.saveReservation.bind(this);

        }

        searchRooms = (event) => {
            event.preventDefault();
            let reservation = {start: this.state.startDate, end: this.state.endDate, type: this.state.roomType}
            console.log('reservation => ' + JSON.stringify(reservation));
            GuestService.searchRooms(reservation).then(res => {
                this.setState({disponibleRooms: res.data}
                )
            })
        }

        saveReservation(_startDate, _endDate, _roomId, _guestId){
            let reservation = {
                startDate: _startDate, 
                endDate: _endDate, 
                roomId: _roomId, 
                guestId: _guestId
            }
            GuestService.addReservation(reservation).then(res => {
                console.log('add res res => ' + JSON.stringify(res));
                this.props.history.push('/guest');
            })
        }

        changeStartDateHandler = (event) => {
            this.setState({
                disponibleRooms: [],
                startDate: event.target.value
            });   
        }
    
        changeEndDateHandler = (event) => {
            this.setState({
                disponibleRooms: [],
                endDate: event.target.value});    
        }
    
        changeTypeHandler = (event) =>{
            this.setState({
                disponibleRooms: [],
                roomType: event.target.value});      
        }
    
        cancel(){
            this.props.history.push('/guest');
        }

        render() {
            return (
                <div>
                    <div>
                        <div className = "container"> 
                            <div className = "row">
                                <div className = "card col-md-6 offset-md-3 offset-md-3">
                                    <h3 className="text-center">Add reservation</h3>
                                    <div className="card-body">
                                        <form>
                                            <div className ="form-group">
                                                <label> Start Date: </label>
                                                <input placeholder="Start Date" name="startDate" type="date" className="form-control" 
                                                    value={this.state.startDate} onChange={this.changeStartDateHandler}/>
                                            </div>
                                            <div className ="form-group">
                                                <label >End Date: </label>
                                                <input placeholder="End Date" name="endDate" type="date" className="form-control" 
                                                    value={this.state.endDate} onChange={this.changeEndDateHandler}/>
                                            </div>
                                            <div className ="form-group">
                                                <label> Room Type: </label>
                                                <input placeholder="Room Type" name="type" className="form-control" 
                                                    value={this.state.roomType} onChange={this.changeTypeHandler}/>
                                            </div>                                   
        
                                            <button className="btn btn-success" onClick={this.searchRooms}>Search</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                {this.state.disponibleRooms.length > 0 &&
                    <div>
                        <h2 className="text-center">Disponbile Rooms for selected dates</h2>
                        <div className = "row">
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th> Room Number</th>
                                            <th> Room Type</th>
                                            <th> Room Price</th>
                                            <th> Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.disponibleRooms.map(
                                                room => 
                                                <tr key = {room.id}>
                                                    <td> {room.number}</td>
                                                    <td> {room.type} </td>   
                                                    <td> {room.price}</td>
                                                    <td>
                                                        <button className ="btn btn-primary" onClick={() => this.saveReservation(this.state.startDate, this.state.endDate, room.id, this.state.guestId)}>Reserve</button>                                 
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                        </div>
                    </div>
                }
                </div>
            );
        }
}

export default AddReservationComponent;