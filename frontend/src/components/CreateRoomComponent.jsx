import React, { Component } from 'react';
import RoomService from '../services/RoomService';

class CreateRoomComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            number: '',
            type: '1',
            price: ''
        }  

        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveRoom = this.saveRoom.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    saveRoom = (event) => {
        event.preventDefault()
        let room = {number: this.state.number, type: this.state.type, price: this.state.price};
        console.log('room => ' + JSON.stringify(room));

        RoomService.createRoom(room).then(res => {
            this.props.history.push('/admin');
        })
    }

    changeNumberHandler = (event) => {
        this.setState({number: event.target.value});
    }

    changePriceHandler = (event) =>{
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/admin');
    }

    handleChange = (event) =>{
        this.setState({type: event.target.value});
        console.log(event.target.value);
    }

    render() {
        return (
            <div>
                <div className = "container"> 
                    <div className = "row mt-3">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Room</h3>
                            <div className="card-body">
                                <form>
                                    <div className ="form-group">
                                        <label> Room Number: </label>
                                        <input placeholder="Room Number" name="number" className="form-control" 
                                            value={this.state.number} onChange={this.changeNumberHandler}/>
                                    </div>                                   
                                    <div className ="form-group">
                                        <label> Room Price: </label>
                                        <input placeholder="Room Price" name="price" className="form-control" 
                                            value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <div className ="form-group">
                                                 <label >Room Type: </label>
                                                <select value={this.state.type} onChange={this.handleChange} className="form-control">                                
                                                    <option value='1'>Single</option>
                                                    <option value='2'>Double</option>
                                                    <option value='3'>Twin</option>
                                                </select>
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