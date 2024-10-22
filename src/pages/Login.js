import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../components/MetaData";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const loginHandler = (e) => {
        e.preventDefault();
        navigate("/");
    }

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <Fragment>
            <MetaData title="Login" />
            {/* SVG Background */}
            <div style={{ position: "absolute", width: "100%", height: "100%", zIndex: "-1" }}>
                <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#ffffff">
                    <defs>
                        <path id="wavepath" d="M 0 2000 0 500 Q 93 390 186 500 t 186 0 186 0 186 0 186 0 186 0 186 0 186 0 v1000 z" />
                        <path id="motionpath" d="M -372 0 0 0" />
                    </defs>
                    <g>
                        <use xlinkHref="#wavepath" y="-107" fill="#29B6F6">
                            <animateMotion dur="5s" repeatCount="indefinite">
                                <mpath xlinkHref="#motionpath" />
                            </animateMotion>
                        </use>
                    </g>
                </svg>
            </div>

            {/* Login Form */}
            <section style={{ position: "relative", zIndex: 1 }}>
                <div className="container login-contain">
                    <div className="form-box">
                        <div>
                            <label className="form-label">Email ID</label>
                            <input type="text" className="form-control" placeholder="Enter Your Email"></input>
                        </div>
                        <div>
                            <label className="form-label">Password</label>
                            <input type="text" className="form-control" placeholder="Enter Your Password" />
                        </div>
                        <div className="mt-2">
                            <button type="button" className="btn btn-primary" onClick={loginHandler}>Login</button>
                        </div>
                        <div className="mt-2">
                            <a href="#" onClick={openModal} style={{ textDecoration: "none", color: "#fff" }}>Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal Code */}
            {showModal && (
                <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Forgot Password</h5>
                                <button type="button" className="close" onClick={closeModal} aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Please enter your email address to reset your password.</p>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    )
}
