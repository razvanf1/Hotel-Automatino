import React, { Component } from 'react';
import AdminService from '../services/AdminService'

class SendOffersComponent extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            mailTopic: '',
            mailBody: ''
        }  
    
        this.changeMailTopic = this.changeMailTopic.bind(this);
        this.changeMailBody = this.changeMailBody.bind(this);
        this.sendMail = this.sendMail.bind(this);
        this.cancel = this.cancel.bind(this);

    }

    changeMailTopic = (event) => {
        this.setState({
            mailTopic: event.target.value
        })
    }

    changeMailBody = (event) => {
        this.setState({
            mailBody: event.target.value
        })
    }

    sendMail = (event) => {
        event.preventDefault()
        let email = {mailTopic: this.state.mailTopic, mailBody: this.state.mailBody};

        AdminService.sendMail(email).then( res =>{
            this.props.history.push('/admin');
        });
    }

    cancel(){
        this.props.history.push('/admin');
    }

    render() {
        return (
            <div>
                <h3>Send offers to guests</h3>
                <div className="form-group">
                    <label for="mailTopic">Mail topic</label>
                    <input className="form-control" value={this.state.mailTopic} onChange={this.changeMailTopic}></input>
                </div>
                <div className="form-group">
                    <label for="mailBody">Mail body</label>
                    <textarea className="form-control" rows ='10' value={this.state.mailBody} onChange={this.changeMailBody} ></textarea>
                </div>
                <button type="button" className="btn btn-info btn-lg" onClick={this.sendMail} >Send mail</button>
                <button className="btn btn-danger btn-lg" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
            </div>
        );
    }
}

export default SendOffersComponent;