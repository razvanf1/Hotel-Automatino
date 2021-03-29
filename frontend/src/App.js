import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListRoomComponent from './components/ListRoomComponent'
import CreateRoomComponent from './components/CreateRoomComponent';
import UpdateRoomComponent from './components/UpdateRoomComponent';

function App() {
  return (
    <div>
      <Router>
            <HeaderComponent />
                <div className="container">
                  <Switch>
                    {/* <Route path = "/" exact component = {ListRoomComponent}></Route> */}
                    <Route path = "/admin" exact component = {ListRoomComponent}></Route>
                    <Route path = "/admin/add-room" component = {CreateRoomComponent}></Route>          
                    <Route path = "/admin/update-room/:id" component = {UpdateRoomComponent}></Route>     
                  </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
