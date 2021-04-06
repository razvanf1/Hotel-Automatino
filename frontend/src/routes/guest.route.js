import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import auth    from '../services/AuthService';

export const GuestRoute = ({component: Component, ...rest}) => {
    let authService = auth.getInstance();
    return(
        <Route
            {...rest}
             render={ props => {
                if(authService.isGuest()){ 
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