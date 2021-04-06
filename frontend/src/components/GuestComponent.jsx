import React, { Component } from 'react';
import LogoutButton from './LogoutButton';

class GuestComponent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <h1>PAGINA PENTRU GUEST</h1>
                
                    <LogoutButton/>
                </div>
            </div>
        );
    }
}

export default GuestComponent;