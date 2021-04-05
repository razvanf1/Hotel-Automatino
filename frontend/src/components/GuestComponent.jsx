import React, { Component } from 'react';
import LogOutButton from './LogOutButton';

class GuestComponent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                <h1>PAGINA PENTRU GUEST</h1>
                
                    <LogOutButton/>
                </div>
            </div>
        );
    }
}

export default GuestComponent;