import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            console.log("here");
            await login(emailRef.current.value, passwordRef.current.value);
            console.log("here");
            history.push("/");
        } catch {
            setError("Failed to sign in");
        }
        setLoading(false);
    };

    return (
        <div className="sub-part-1">
            <div id="login-container">
                <div id="c1">
                    <div id="c2">
                        <div style={{ textAlign: "center" }}>
                            <h2 id="login-heading">LOGIN</h2>
                        </div>
                        <div className="container">
                            <form
                                style={{ marginBottom: 2 + "%" }}
                            >
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control second-input"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                        name="email"
                                        ref={emailRef}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control third-input"
                                        placeholder="Password"
                                        name="password"
                                        ref={passwordRef}
                                        requred
                                    />
                                </div>
                                <br />
                                <hr style={{ backgroundColor: "#EBEAE2" }} />

                                <div className="text-center">
                                    <button
                                        type="submit"
                                        className="button"
                                        onClick={handleSubmitClick}
                                        disabled={loading}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                            <div className="registerMessage" style = {{color:'azure', margin:20+'px'}}>
                                Dont have an account?{" "}
                                <Link to="/register" style = {{color:'azure', textDecoration:'underline'}}>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {error && <Alert variant="transparent" className = "mt-2" style={{fontSize:20+'px' ,color : 'azure'}}>{error}</Alert>}
            </div>
        </div>
    );
}

export default Login;
