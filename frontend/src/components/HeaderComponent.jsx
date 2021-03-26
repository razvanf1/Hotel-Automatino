import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://assist-software.net/" rel="noreferrer" target="_blank" className="navbar-brand">Assist Tech Challenge - Trusty Shoes Hotel Automatino</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;