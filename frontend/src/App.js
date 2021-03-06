import React                    from 'react';
import './App.css';
import LoginComponent           from './components/LoginComponent';
import ListRoomComponent        from './components/ListRoomComponent'
import CreateRoomComponent      from './components/CreateRoomComponent';
import UpdateRoomComponent      from './components/UpdateRoomComponent';
import StaffComponent           from './components/StaffComponent';
import GuestComponent           from './components/GuestComponent';
import AddReservationComponent  from './components/AddReservationComponent';

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
import SendOffersComponent from './components/SendOffersComponent';
import ViewReservationsComponent from './components/ViewReservationsComponent';

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
      <AdminRoute
        exact
        path="/admin/sendoffers"
        component={SendOffersComponent}
      />
      <AdminRoute
        exact
        path="/admin/viewreservations"
        component={ViewReservationsComponent}
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
      <GuestRoute
        exact
        path = "/guest/add-reservation"
        component={AddReservationComponent}
      />
    
      <Route path="*" component={() => "404 NOT FOUND"}/>
      </Switch>
      </div>
      <FooterComponent/>
    </div>
    
  );
}

export default App;
