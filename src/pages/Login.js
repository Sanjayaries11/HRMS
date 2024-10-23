import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../components/MetaData";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login.css'

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

            {/* Login Form */}
            <section style={{ position: "relative", zIndex: 1 }}>
                <div className="container login-contain">
                    <div className="form-box">
                        <div className="login-div">
                            <label className="form-label text-dark fw-bold">Email ID</label>
                            <input type="text" className="form-control" placeholder="Enter Your Email"></input>
                        </div>
                        <div className="login-div">
                            <label className="form-label text-dark fw-bold">Password</label>
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
                <div className="modal fade show d-block" tabIndex="-1" role="dialog">
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
