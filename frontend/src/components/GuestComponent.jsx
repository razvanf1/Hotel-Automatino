import React, { Component } from 'react';
import LogoutButton from './LogoutButton';
import auth         from '../services/AuthService';
import GuestService from '../services/GuestService';

class GuestComponent extends Component{


    constructor(props){
        let authService = auth.getInstance();
        super(props)
        this.state = {
            reservations: [],
            id: authService.getId()
        }

        this.addReservation = this.addReservation.bind(this);   
    }

    addReservation(){
        this.props.history.push('/guest/add-reservation');
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
        console.log('curent date =>' + currentDate);
        return (
            <div>
                <div className="container">
                    <h1>PAGINA PENTRU GUEST</h1>
                    <h2>Welcome {authService.getUsername()}</h2>
                    <p>Email: {authService.getEmail()}</p>
                    <p>Id: {authService.getId()}</p>
                    <p>Role: {authService.getRole()}</p>
                </div>
                
                <div className = "row">
                <button className = "btn btn-primary btn-lg" onClick={this.addReservation}>Add reservation</button>
                </div>
                <h2 className="text-center">Reservations List</h2>

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
                                        <tr key = {reservation.roomId}>
                                        <td> {reservation.roomNumber}</td>
                                        <td> {reservation.roomType}</td>
                                        <td> {reservation.startDate}</td>
                                        <td> {reservation.endDate}</td>
                                        <td>
                                            {currentDate === reservation.startDate ?
                                            <button className="btn btn-primary btn-sm" >
                                                Check-out
                                            </button>
                                            :
                                            <button className="btn btn-primary btn-sm" >
                                                Check-in
                                            </button>
                                            }
                                            {currentDate === reservation.startDate ?
                                            <button className="btn btn-success btn-sm" style={{marginLeft: "10px"}}>Open room</button>
                                            :
                                            <button className="btn btn-success btn-sm" style={{marginLeft: "10px"}}>Cancel</button>
                                            }
                                           
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>

                </div>

                <div className="row">
                    <h2>Active room:</h2>
                </div>

                <div className="row">
                    <LogoutButton/>
                </div>
                
            </div>
        );
    }
}

export default GuestComponent;