import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth    from '../services/AuthService';

export const StaffRoute = ({component: Component, ...rest}) => {
    let authService = auth.getInstance();
    return(
        <Route
            {...rest}
             render={ props => {
                if(authService.isStaff()){ 
                    return <Component {...props} />;
                }
                else{
                    return <Redirect to={
                        {
                        pathname: "/unauthorized",
                        state: {
                            from: props.location
                        }
                    }
                } />
            }
        }}
        />
    );
};