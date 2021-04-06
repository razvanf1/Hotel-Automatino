/*
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListRoomComponent from './components/ListRoomComponent'
import CreateRoomComponent from './components/CreateRoomComponent';
import UpdateRoomComponent from './components/UpdateRoomComponent';
import StaffComponent from './components/StaffComponent';
import LoginComponent from './components/LoginComponent';
import GuestComponent from './components/GuestComponent';
import {AdminRoute}   from './routes/admin.route';

  <Router>
  <HeaderComponent />
  <div className="container">
    <Switch>
      <Route path = "/" exact component = {LoginComponent}></Route>
      <Route path = "/admin" exact component = {ListRoomComponent}></Route>
      <Route path = "/admin/add-room" component = {CreateRoomComponent}></Route>          
      <Route path = "/admin/update-room/:id" component = {UpdateRoomComponent}></Route>     
      <Route path = "/staff" component={StaffComponent}></Route>
      <Route path = "/guest" component={GuestComponent}></Route>
    </Switch>
  </div>
  <FooterComponent />
  </Router>
*/

import React                from 'react';
import './App.css';
import LoginComponent       from './components/LoginComponent';
import ListRoomComponent    from './components/ListRoomComponent'
import CreateRoomComponent  from './components/CreateRoomComponent';
import UpdateRoomComponent  from './components/UpdateRoomComponent';
import StaffComponent       from './components/StaffComponent';
import GuestComponent       from './components/GuestComponent';

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';

import {
  Route,
  Switch
} from 'react-router-dom';
import { AdminRoute } from './routes/admin.route';
import { StaffRoute } from './routes/staff.route';
import { GuestRoute } from './routes/guest.route';
import UnauthorizedComponent from './components/UnauthorizedComponent';

function App() {
  return (
    
    <div className="App">
      <HeaderComponent/>
      <div className="container">
      <Switch>
      <Route exact path = "/" component={LoginComponent}/>
      <Route exact path = "/unauthorized" component={UnauthorizedComponent}/>

      <AdminRoute
        exact
        path="/admin"
        component={ListRoomComponent}
      />
      <AdminRoute
        exact
        path="/admin/add-room"
        component={CreateRoomComponent}
      />
      <AdminRoute
        exact
        path="/admin/update-room/:id"
        component={UpdateRoomComponent}
      />

      <StaffRoute
        exact
        path = "/staff" 
        component={StaffComponent}
      />
      
      <GuestRoute
        exact
        path = "/guest"
        component={GuestComponent}
      />
    
      <Route path="*" component={() => "404 NOT FOUND"}/>
      </Switch>
      </div>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
