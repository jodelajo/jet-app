import React from 'react';
import {
    Route
} from 'react-router-dom';


function PrivateRoute({children, isAuthenticated, ...rest}) {
    // if(isAuthenticated === false) {
    //     return <Redirect to={`/login`}/>
    // }
    // console.log()
    return (
        <Route {...rest}>
            {children}

        </Route>
    );
};


export default PrivateRoute;