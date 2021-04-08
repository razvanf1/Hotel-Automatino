import React, { Component } from 'react';
import AdminServices from '../services/AdminService';

class ViewReservationsComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            reservations: [],
            startDate: '',
            endDate: ''
        }

        this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
        this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
        this.viewReservations = this.viewReservations.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    changeStartDateHandler = (event) => {
        this.setState({
            reservations: [],
            startDate: event.target.value
        });  
    }

    changeEndDateHandler = (event) => {
        this.setState({
            reservations: [],
            endDate: event.target.value
        });  
    }

    viewReservations = (event) => {
        event.preventDefault();
        let timeInterval = {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        };

        console.log('time interval => ' + JSON.stringify(timeInterval));
        AdminServices.getReservations(timeInterval).then(res => {
            this.setState({
                reservations: res.data
            })
        });

        console.log(JSON.stringify(this.state.reservations));
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
                                    <h3 className="text-center">Search reservations</h3>
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
        
                                            <button className="btn btn-success" onClick={this.viewReservations}>Search</button>
                                            <button className="btn btn-danger" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {this.state.reservations.length > 0 &&
                        <div className = "row">
                        <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Reservations Id</th>
                                    <th> Guest Id</th>
                                    <th> Start Date</th>
                                    <th> End Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.reservations.map(
                                        reservation => 
                                        <tr key = {reservation.id}>
                                             <td> {reservation.id}</td>
                                             <td> {reservation.guestId} </td>   
                                             <td> {reservation.startDate}</td>
                                             <td> {reservation.endDate}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                </div>
                }   
            </div>
        );
    }
}

export default ViewReservationsComponent;