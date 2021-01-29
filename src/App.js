//import "./styles.css";
import { useState } from "react";

// Import the components
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Dashboard from "./components/Dashboard/dashboard";
import PrivateRoute from "./components/PrivateRoute/privateRoute";
// import ForgotPassword from "./components/ForgotPassword/ForgotPassword.js";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { isTypePredicateNode } from "typescript";

export default function App() {
    const [title, updateTitle] = useState(null);
    const [errorMessage, updateErrorMessage] = useState(null);
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Switch>
                        <Route path="/register" component={Register}></Route>
                        <PrivateRoute
                            exact
                            path="/"
                            component={Dashboard}
                        ></PrivateRoute>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </div>
            </AuthProvider>
        </Router>
    );
}
