import React, { Component } from 'react';

class AddReservationComponent extends Component {
    constructor(props)
        {
            super(props)
            this.state = {
                startDate: '',
                endDate:'',
                roomType:''
            }  
    
            this.changeStartDateHandler = this.changeStartDateHandler.bind(this);
            this.changeEndDateHandler = this.changeEndDateHandler.bind(this);
            this.changeTypeHandler = this.changeTypeHandler.bind(this);
            this.saveReservation = this.saveReservation.bind(this);

        }

        saveReservation = (event) => {
            //de facut ca am innebunit
        }

        changeStartDateHandler = (event) => {
            this.setState({startDate: event.target.value});
        }
    
        changeEndDateHandler = (event) => {
            this.setState({endDate: event.target.value});
        }
    
        changeTypeHandler = (event) =>{
            this.setState({type: event.target.value});
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
                                    <h3 className="text-center">Edit Room</h3>
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
                                                    value={this.state.type} onChange={this.changeTypeHandler}/>
                                            </div>
        
                                            <button className="btn btn-success" onClick={this.saveReservation}>Search</button>
                                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
}

export default AddReservationComponent;