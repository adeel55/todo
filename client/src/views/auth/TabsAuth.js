import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

import logoDark from '../../assets/images/logo-dark.png';
import Breadcrumb from '../../layouts/AdminLayout/Breadcrumb';

const TabsAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    const authSignInClass = (isAuth) ? 'active' : 'toggle-btn';
    const authSignUpClass = (isAuth) ? 'toggle-btn' : 'active';
    const blockClass = ['toggle-block'];
    const blockSignInClass = (!isAuth) ? [...blockClass, 'collapse'] : blockClass;
    const blockSignUpClass = (isAuth) ? [...blockClass, 'collapse'] : blockClass;

    return (
        <React.Fragment>
            <Breadcrumb/>
            <div className="blur-bg-images"/>
            <div className="auth-wrapper">
                <div className="auth-content text-center">
                    <Card className="borderless">
                        <Row className="align-items-center text-center">
                            <Col>
                                <Card.Body className="card-body">
                                    <img src={logoDark} alt="" className="img-fluid mb-4" />
                                    <h3 className="mb-3">Welcome</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                    <div className={blockSignInClass.join(' ')}>
                                        <ol className="position-relative carousel-indicators justify-content-center">
                                            <li className={authSignInClass} onClick={() => setIsAuth(true)} />
                                            <li className={authSignUpClass} onClick={() => setIsAuth(false)} />
                                        </ol>
                                        <div className="input-group mb-2">
                                            <input type="email" className="form-control" placeholder="Email address" />
                                        </div>
                                        <div className="input-group mb-4">
                                            <input type="password" className="form-control" placeholder="Password" />
                                        </div>
                                        <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" defaultChecked={false}/>
                                            <label className="custom-control-label" htmlFor="customCheck1">Save credentials.</label>
                                        </div>
                                        <button className="btn  btn-primary mb-4 mr-2">Signin</button>
                                        <button className="btn  btn-outline-primary mb-4 toggle-btn">Create Profile</button>
                                        <p className="mb-2 text-muted">Forgot password? <NavLink to="/auth/reset-password-1" className="f-w-400">Reset</NavLink></p>
                                    </div>
                                    <div className={blockSignUpClass.join(' ')}>
                                        <ol className="position-relative carousel-indicators justify-content-center">
                                            <li className={authSignInClass} onClick={() => setIsAuth(true)} />
                                            <li className={authSignUpClass} onClick={() => setIsAuth(false)} />
                                        </ol>
                                        <div className="input-group mb-2">
                                            <input type="text" className="form-control" placeholder="Username" />
                                        </div>
                                        <div className="input-group mb-2">
                                            <input type="email" className="form-control" placeholder="Email address" />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="password" className="form-control" placeholder="Password"/>
                                        </div>
                                        <div className="custom-control custom-checkbox  text-left mb-4 mt-2">
                                            <input type="checkbox" className="custom-control-input" id="customCheck2" defaultChecked={false}/>
                                            <label className="custom-control-label" htmlFor="customCheck2">Save credentials.</label>
                                        </div>
                                        <button className="btn  btn-primary mb-4 mr-2">Signup</button>
                                        <button className="btn  btn-outline-primary mb-4 toggle-btn">Existing user</button>
                                    </div>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </div>
        </React.Fragment>
    );
}

export default TabsAuth;