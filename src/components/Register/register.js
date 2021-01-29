import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import "./register.css";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
function Register() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const handleSubmitClick = async (e) => {
        e.preventDefault();
        try {
            setError("");
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
            history.push("/");
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    };
    return (
        <div className="sub-part-1">
            <div id="register-container">
                <div id="c1">
                    <div id="c2">
                        <div style={{ textAlign: "center" }}>
                            <h2 id="register-heading">Register</h2>
                        </div>

                        <div className="container">
                            <form
                                style={{ marginBottom: 2 + "%" }}
                            >
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control first-input"
                                        aria-describedby="emailHelp"
                                        placeholder="Full Name"
                                        name="name"
                                        ref={nameRef}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-control second-input"
                                        aria-describedby="emailHelp"
                                        placeholder="Email"
                                        ref={emailRef}
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
                                        Register
                                    </button>
                                </div>
                            </form>

                            <div className="loginMessage" style = {{color:'azure', margin:20+'px'}}>
                                Already have an account?{" "}
                                <Link to="/login" style = {{color:'azure', textDecoration:'underline'}}>Log In</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {error && <Alert variant="transparent" className = "mt-2" style={{fontSize:20+'px' ,color : 'azure'}}>{error}</Alert>}
            </div>
        </div>
    );
}

export default Register;
