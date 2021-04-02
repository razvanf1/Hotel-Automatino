import React, { Component } from 'react';
import AdminServices from '../services/AdminService'

class LoginComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            email: '',
            password: ''
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

        AdminServices.getAdmin(user).then((response) => {
            localStorage.setItem("user-info", JSON.stringify(response));
            this.props.history.push("/admin");
            console.log(response);
        }, (error) => {
            console.log(error);
        });
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