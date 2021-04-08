import React, { Component } from 'react';
import LogoutButton from './LogoutButton';
import auth         from '../services/AuthService';
import GuestService from '../services/GuestService';
import RoomServices from '../services/RoomService'

class GuestComponent extends Component{


    constructor(props){
        let authService = auth.getInstance();
        super(props)
        this.state = {
            reservations: [],
            id: authService.getId()
        }

        this.addReservation = this.addReservation.bind(this);
        this.deleteReservation = this.deleteReservation.bind(this);
        this.checkIn = this.checkIn.bind(this);
        this.checkOut = this.checkOut.bind(this);
        this.unlockDoor = this.unlockDoor.bind(this);
    }

    addReservation(){
        this.props.history.push('/guest/add-reservation');
    }

    deleteReservation(reservationId){
        GuestService.deleteReservation(reservationId).then((res) => {
            this.setState({reservations: this.state.reservations.filter(reservation => reservation.reservationId !== reservationId)});
        })
    }
    
    checkIn(reservationId){
        GuestService.checkIn(reservationId).then(() => {
            this.setState({
                reservations: this.state.reservations.map(reservation =>{
                    if(reservation.reservationId === reservationId){
                        reservation.roomStatus = 1;
                        return reservation;
                    }
                    return reservation;
                })
            });
        })
    }

    checkOut(reservationId){
        GuestService.checkOut(reservationId).then(() => {
            this.setState({reservations: this.state.reservations.filter(reservation => reservation.reservationId !== reservationId)});
        })
    }

    unlockDoor(roomId){
        RoomServices.unlockRoom(roomId).then(() => {
            console.log("Room unlocked");
        });
    }

    componentDidMount(){
        GuestService.getReservations(this.state.id).then((res) => {
            this.setState({reservations: res.data});
            console.log("reservations => " + JSON.stringify(this.state.reservations));
        })  
    }

    render() {
        let authService = auth.getInstance();
        const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
        return (
            <div>
                <div className="container">
                    <h2>Welcome, {authService.getUsername()}!</h2>
                    <p>Email: {authService.getEmail()}</p>
                </div>
                
                {this.state.reservations.length > 0 &&
                    <div>
                        <h2 className="text-left">Reservations List</h2>
                        <div className = "row">
                                <table className = "table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Room Number</th>
                                            <th>Room Type</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.state.reservations.map(
                                                reservation => 
                                                <tr key = {reservation.reservationId}>
                                                <td> {reservation.roomNumber}</td>
                                                <td> {reservation.roomType}</td>
                                                <td> {reservation.startDate}</td>
                                                <td> {reservation.endDate}</td>
                                                <td>
                                                    {
                                                    currentDate >= reservation.startDate ?         
                                                        reservation.roomStatus === 0 ?                     
                                                            <button className="btn btn-primary btn-sm" onClick = { () => this.checkIn(reservation.reservationId)} >
                                                                Check-in
                                                            </button>
                                                        :
                                                            <button className="btn btn-danger btn-sm" onClick = { () => this.checkOut(reservation.reservationId)}>
                                                                Check-out
                                                            </button>
                                                        :
                                                        <button className="btn btn-danger btn-sm" onClick = { () => this.deleteReservation(reservation.reservationId)}>
                                                            Cancel
                                                        </button>
                                                    }
                                                    {
                                                        currentDate >= reservation.startDate &&
                                                            reservation.roomStatus === 1 &&
                                                                <button className="btn btn-primary btn-sm" onClick = { () => this.unlockDoor(reservation.roomId)} style={{marginLeft: "10px"}}>
                                                                    Unlock Door
                                                                </button>
                                                    }                                                                         
                                                </td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                        </div>
                    </div>
                }


                <div className = "row">
                    <button className = "btn btn-primary" onClick={this.addReservation} style={{marginRight: "10px"}}>Add reservation</button>
                    <LogoutButton/>
                </div>
                
            </div>
        );
    }
}

export default GuestComponent;