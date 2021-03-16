import React from 'react'
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom'

import isAuthenticated from './isAuthenticated'

// Router that checks if user is logged-in
// If not, redirect to "/login"
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
    />
);


// screen if you're not yet authenticated.
// function PrivateRoute({ children, ...rest }) {
//     let auth = useAuth();
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 auth.user ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }

export default PrivateRoute;
