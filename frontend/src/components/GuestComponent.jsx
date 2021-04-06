import React, { Component } from 'react';
import LogoutButton from './LogoutButton';
import auth         from '../services/AuthService';
import GuestService from '../services/GuestService';

class GuestComponent extends Component{

    constructor(props){
        super(props)
        let authService = auth.getInstance();
        this.state = {
            reservations: [
            {
                "number": 2,
                "id": 1,
                "type": 1,
                "start": '24.06.2021',
                "end": '30.06.2021'
            },
            {
                "number": 3,
                "id": 2,
                "type": 3,
                "start": '24.07.2021',
                "end": '30.07.2021'
            }
            ],
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
        })
    }


    render() {
        let authService = auth.getInstance();
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
                                        <tr key = {reservation.id}>
                                        <td> {reservation.number}</td>
                                        <td> {reservation.type}</td>
                                        <td> {reservation.start}</td>
                                        <td> {reservation.end}</td>
                                        <td>
                                            <button className="btn btn-primary btn-sm" >Check-in/Check-out</button>
                                            <button className="btn btn-success btn-sm" style={{marginLeft: "10px"}}>Cancel/Open room</button>
                                        </td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>

                </div>

                <div className="row">
                    <h2> Active room:</h2>
                </div>

                <div className="row">
                    <LogoutButton/>
                </div>
                
            </div>
        );
    }
}

export default GuestComponent;