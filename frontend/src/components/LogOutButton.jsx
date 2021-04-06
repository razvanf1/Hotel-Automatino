import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import auth                 from '../services/AuthService';

class LogOutButton extends Component {

    logoutUser = (event) =>
    {
        let authService = auth.getInstance();
        localStorage.clear();
        authService.logout();
    }

    render() {
        return (
            <div>
                 <Link to="/"><button className = "btn btn-danger" onClick={this.logoutUser}>Logout</button></Link>
            </div>
        );
    }
}

export default LogOutButton;