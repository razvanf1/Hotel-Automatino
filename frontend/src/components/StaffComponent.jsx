import React, { Component } from 'react';
import LogoutButton from './LogoutButton';

class StaffComponent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <h1>PAGINA PENTRU STAFF</h1>              
                    <LogoutButton/>
                </div>
            </div>
        );
    }
}

export default StaffComponent;