import React, { Component } from 'react';
import AdminService from '../services/AdminService'
import GuestService from '../services/GuestService';
import StaffService from '../services/StaffService';

class LoginComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            email: '',
            password: '',
            logedIn: false
        }  
    
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    changeEmailHandler = (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }

    loginUser = (event) =>{
        event.preventDefault();
        let user = {email: this.state.email, password: this.state.password};
        console.log('user => ' + JSON.stringify(user));

        ////SE PUTEA SI MAI BINE
        AdminService.getAdmin(user).then(response => {
            localStorage.setItem("user-name", JSON.stringify(response.data.firstName));
            localStorage.setItem("user-role", JSON.stringify(response.data.role));
            this.props.history.push('/admin');
        })

        StaffService.getStaff(user).then(response => {
            localStorage.setItem("user-name", JSON.stringify(response.data.firstName));
            localStorage.setItem("user-role", JSON.stringify(response.data.role));
            this.props.history.push('/staff');
        })

        GuestService.getGuest(user).then(response => {
            localStorage.setItem("user-name", JSON.stringify(response.data.firstName));
            localStorage.setItem("user-role", JSON.stringify(response.data.role));
            this.props.history.push('/guest');
        })
    }


    render() {
            return (
                <div>
                    <div>
                        <div className = "container"> 
                            <div className = "row">
                                <div className = "card col-md-6 offset-md-3 offset-md-3">
                                    <h3 className="text-center">Login</h3>
                                    <div className="card-body">
                                        <form>
                                            <div className ="form-group">
                                                <label> Email: </label>
                                                <input placeholder="Email" name="email" className="form-control" 
                                                    value={this.state.email} onChange={this.changeEmailHandler}/>
                                            </div>
                                            <div className ="form-group">
                                                <label > Password: </label>
                                                <input placeholder="Password" name="type" className="form-control" type="password"
                                                    value={this.state.password} onChange={this.changePasswordHandler}/>
                                            </div>               
        
                                            <button className="btn btn-success" onClick={this.loginUser}>Login</button>
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

export default LoginComponent;