import React from "react";
import { NavLink, Link } from 'react-router-dom';

import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

import authLogo from '../../../assets/images/auth/auth-logo.png';
import authLogoDark from '../../../assets/images/auth/auth-logo-dark.png';

const SignUp2 = () => {
    return (
        <React.Fragment>
            <Breadcrumb/>
            <div className="auth-wrapper align-items-stretch aut-bg-img">
                <div className="flex-grow-1">
                    <div className="h-100 d-md-flex align-items-center auth-side-img">
                        <div className="col-sm-10 auth-content w-auto">
                            <img src={authLogo} alt="" className="img-fluid"/>
                            <h1 className="text-white my-4">Welcome you!</h1>
                            <h4 className="text-white font-weight-normal">Signup to your account and made member of the Gradient Able Dashboard Template.<br/>Do not forget to play with live customizer</h4>
                        </div>
                    </div>
                    <div className="auth-side-form">
                        <div className=" auth-content">
                            <img src={authLogoDark} alt="" className="img-fluid mb-4 d-block d-xl-none d-lg-none" />
                            <h4 className="mb-3 f-w-400">Sign up</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email address" />
                            </div>
                            <div className="input-group mb-4">
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked={false}/>
                                <label className="custom-control-label" htmlFor="customCheck1">Send me the <Link to='#'> Newsletter</Link> weekly.</label>
                            </div>
                            <button className="btn btn-primary btn-block mb-4">Sign up</button>
                            <div className="text-center">
                                <div className="saprator my-4"><span>OR</span></div>
                                <button className="btn text-white bg-facebook mb-2 mr-2  wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-facebook-f"/></button>
                                <button className="btn text-white bg-googleplus mb-2 mr-2 wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-google-plus-g"/></button>
                                <button className="btn text-white bg-twitter mb-2  wid-40 px-0 hei-40 rounded-circle"><i className="fab fa-twitter"/></button>
                                <p className="mt-4">Already have an account? <NavLink to="/auth/signin-2" className='f-w-400'>Signin</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default SignUp2;