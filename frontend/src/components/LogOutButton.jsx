import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogOutButton extends Component {

    logoutUser = (event) =>
    {
        localStorage.clear();
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