import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Row, Col, Card, ProgressBar, Table, Tabs, Tab, Carousel, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Avatar1 from '../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../assets/images/user/avatar-3.jpg';
import Avatar4 from '../../../assets/images/user/avatar-4.jpg';
import Avatar5 from '../../../assets/images/user/avatar-5.jpg';

import imgSlide1 from '../../../assets/images/slider/img-slide-1.jpg';
import imgSlide2 from '../../../assets/images/slider/img-slide-2.jpg';
import imgSlide4 from '../../../assets/images/slider/img-slide-4.jpg';
import imgSlide5 from '../../../assets/images/slider/img-slide-5.jpg';

import p1 from '../../../assets/images/widget/p1.jpg';
import p2 from '../../../assets/images/widget/p2.jpg';
import p3 from '../../../assets/images/widget/p3.jpg';
import p4 from '../../../assets/images/widget/p4.jpg';

const WidgetData = () => {
    return (
        <React.Fragment>
            <Row>
                <Col sm={12}>
                    <Card className="tabs-card">
                        <Card.Body className="nav-fill">
                            <Tabs variant="pills" defaultActiveKey="home" className="mb-3">
                                <Tab eventKey="home" title="Home">
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Code</th>
                                            <th>Customer</th>
                                            <th>Purchased On</th>
                                            <th>Status</th>
                                            <th>Transaction ID</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img src={p2} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002344</td>
                                            <td>John Deo</td>
                                            <td>05-01-2017</td>
                                            <td><span className="label label-danger">Failed</span></td>
                                            <td>#7234486</td>
                                        </tr>
                                        <tr>
                                            <td><img src={p3} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002653</td>
                                            <td>Eugine Turner</td>
                                            <td>04-01-2017</td>
                                            <td><span className="label label-success">Delivered</span></td>
                                            <td>#7234417</td>
                                        </tr>
                                        <tr>
                                            <td><img src={p4} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002156</td>
                                            <td>Jacqueline Howell</td>
                                            <td>03-01-2017</td>
                                            <td><span className="label label-warning">Pending</span></td>
                                            <td>#7234454</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <div className="text-center">
                                        <Button variant='outline-primary' className="btn-round btn-sm">Load More</Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="security" title="Security">
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Code</th>
                                            <th>Customer</th>
                                            <th>Purchased On</th>
                                            <th>Status</th>
                                            <th>Transaction ID</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img src={p3} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002653</td>
                                            <td>Eugine Turner</td>
                                            <td>04-01-2017</td>
                                            <td><span className="label label-success">Delivered</span></td>
                                            <td>#7234417</td>
                                        </tr>
                                        <tr>
                                            <td><img src={p4} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002156</td>
                                            <td>Jacqueline Howell</td>
                                            <td>03-01-2017</td>
                                            <td><span className="label label-warning">Pending</span></td>
                                            <td>#7234454</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <div className="text-center">
                                        <Button variant='outline-primary' className="btn-round btn-sm">Load More</Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="entertainment" title="Entertainment">
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Code</th>
                                            <th>Customer</th>
                                            <th>Purchased On</th>
                                            <th>Status</th>
                                            <th>Transaction ID</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img src={p1} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002413</td>
                                            <td>Jane Elliott</td>
                                            <td>06-01-2017</td>
                                            <td><span className="label label-primary">Shipping</span></td>
                                            <td>#7234421</td>
                                        </tr>
                                        <tr>
                                            <td><img src={p4} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002156</td>
                                            <td>Jacqueline Howell</td>
                                            <td>03-01-2017</td>
                                            <td><span className="label label-warning">Pending</span></td>
                                            <td>#7234454</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <div className="text-center">
                                        <Button variant='outline-primary' className="btn-round btn-sm">Load More</Button>
                                    </div>
                                </Tab>
                                <Tab eventKey="big-data" title="Big Data">
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Code</th>
                                            <th>Customer</th>
                                            <th>Purchased On</th>
                                            <th>Status</th>
                                            <th>Transaction ID</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img src={p1} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002413</td>
                                            <td>Jane Elliott</td>
                                            <td>06-01-2017</td>
                                            <td><span className="label label-primary">Shipping</span></td>
                                            <td>#7234421</td>
                                        </tr>
                                        <tr>
                                            <td><img src={p2} alt="prod img" className="img-fluid"/></td>
                                            <td>PNG002344</td>
                                            <td>John Deo</td>
                                            <td>05-01-2017</td>
                                            <td><span className="label label-danger">Failed</span></td>
                                            <td>#7234486</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                    <div className="text-center">
                                        <Button variant='outline-primary' className="btn-round btn-sm">Load More</Button>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={8} md={12}>
                    <Card>
                        <Card.Header>
                            <h5>Activity Feed</h5>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as='ul' bsPrefix=' ' className="feed-blog pl-0">
                                <ListGroup.Item as='li' bsPrefix=' ' className="active-feed">
                                    <div className="feed-user-img">
                                        <img src={Avatar4} className="img-radius " alt="User-Profile"/>
                                    </div>
                                    <h6><span className="badge badge-danger">File</span> Eddie uploaded new files: <small className="text-muted">2 hours ago</small></h6>
                                    <p className="m-b-15 m-t-15">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <Row>
                                        <Col sm="auto" className="text-center">
                                            <img src={imgSlide1} alt="img" className="img-fluid wid-100"/>
                                            <h6 className="m-t-15 m-b-0">Old Scooter</h6>
                                            <p className="text-muted m-b-0"><small>PNG-100KB</small></p>
                                        </Col>
                                        <Col sm="auto" className="text-center">
                                            <img src={imgSlide2} alt="img" className="img-fluid wid-100"/>
                                            <h6 className="m-t-15 m-b-0">Wall Art</h6>
                                            <p className="text-muted m-b-0"><small>PNG-150KB</small></p>
                                        </Col>
                                        <Col sm="auto" className="text-center">
                                            <img src={imgSlide4} alt="img" className="img-fluid wid-100"/>
                                            <h6 className="m-t-15 m-b-0">Microphone</h6>
                                            <p className="text-muted m-b-0"><small>PNG-150KB</small></p>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item as='li' bsPrefix=' ' className="diactive-feed">
                                    <div className="feed-user-img">
                                        <img src={Avatar4} className="img-radius " alt="User-Profile"/>
                                    </div>
                                    <h6><span className="badge badge-success">Task</span> Sarah marked the Pending Review: <span className="text-c-green"> Trash Can Icon Design</span><small className="text-muted"> 2 hours ago</small></h6>
                                </ListGroup.Item>
                                <ListGroup.Item as='li' bsPrefix=' ' className="diactive-feed">
                                    <div className="feed-user-img">
                                        <img src={Avatar4} className="img-radius " alt="User-Profile"/>
                                    </div>
                                    <h6><span className="badge badge-primary">comment</span> abc posted a task: <span className="text-c-green">Design a new Homepage</span> <small className="text-muted">6 hours ago</small></h6>
                                    <p className="m-b-15 m-t-15">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card className="bg-facebook social-card">
                        <Card.Body className="social-slider">
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Facebook Feed</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-facebook-f"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Facebook Feed</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-facebook-f"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Facebook Feed</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-facebook-f"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                    <Card className="bg-twitter social-card">
                        <Card.Body className="social-slider">
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Latest Tweets</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-twitter"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Latest Tweets</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-twitter"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Latest Tweets</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-twitter"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                    <Card className="bg-dribbble social-card">
                        <Card.Body className="social-slider">
                            <Carousel>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Responsive</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-dribbble"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Responsive</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-dribbble"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <Row>
                                        <Col className="align-self-start">
                                            <h6 className="text-white mb-3">Responsive</h6>
                                        </Col>
                                        <Col className="align-self-start text-right">
                                            <i className="fab fa-dribbble"/>
                                        </Col>
                                    </Row>
                                    <p className="m-t-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                    <p className="m-t-10 m-b-0"><small>1 March, 2017</small></p>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={12} lg={4}>
                    <Card className="chat-card">
                        <Card.Header>
                            <h5>Chats</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="media received-chat">
                                <img className="align-self-start mr-3 img-radius wid-40" src={Avatar2} alt="usrer"/>
                                <div className="media-body">
                                    <h6 className="mt-0">John Deo</h6>
                                    <p className="m-t-10 msg">Lorem Ipsum is simply dummy text of the printing industry.</p>
                                    <p className="text-muted">10:53am</p>
                                </div>
                            </div>
                            <div className="chat-saprator"><span>Today</span></div>
                            <div className="media send-chat">
                                <div className="media-body">
                                    <h6 className="mt-0">John Deo</h6>
                                    <p className="m-t-10 msg">Lorem Ipsum is simply dummy text of the printing industry.</p>
                                    <p className="text-muted">10:53am</p>
                                </div>
                                <img className="align-self-start ml-3 img-radius wid-40" src={Avatar4} alt="usrer"/>
                            </div>
                            <div className="media received-chat">
                                <img className="align-self-start mr-3 img-radius wid-40" src={Avatar2} alt="usrer"/>
                                <div className="media-body">
                                    <h6 className="mt-0">John Deo</h6>
                                    <p className="m-t-10 msg">Lorem Ipsum is simply dummy text of the printing industry.</p>
                                    <p className="text-muted">10:53am</p>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="chat-control">
                            <div className="chat-form">
                                <input type="text" className="form-control border-0 shadow-none" placeholder="Type Hear . ."/>
                                <div className="chat-btn">
                                    <Button variant='primary' className="btn-icon"><i className="fa fa-paper-plane"/></Button>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={12} lg={8}>
                    <Card>
                        <Card.Header>
                            <h5>Activity</h5>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as='ul' bsPrefix=' ' className="activity-blog pl-0">
                                <ListGroup.Item as='li' bsPrefix=' '>
                                    <div className="activity-user-img">
                                        <img src={Avatar4} className="img-radius" alt="User-Profile"/>
                                    </div>
                                    <h6 className="m-b-0">John Deo <small className="text-muted">2 hours ago</small></h6>
                                    <p className="m-b-15">Assign a new Task <span className="text-c-blue">Design Web Mockup</span></p>
                                    <Row className="row m-b-15">
                                        <Col sm="auto" className="text-center m-b-5 m-t-5">
                                            <img src={imgSlide1} alt="img" className="img-fluid wid-100"/>
                                        </Col>
                                        <Col sm="auto" className="text-center m-b-5 m-t-5">
                                            <img src={imgSlide2} alt="img" className="img-fluid wid-100"/>
                                        </Col>
                                        <Col sm="auto" className="text-center m-b-5 m-t-5">
                                            <img src={imgSlide4} alt="img" className="img-fluid wid-100"/>
                                        </Col>
                                        <Col sm="auto" className="text-center m-b-5 m-t-5">
                                            <img src={imgSlide5} alt="img" className="img-fluid wid-100"/>
                                        </Col>
                                    </Row>
                                    <Link to='#' className="m-r-10 text-muted"><i className="fa fa-comment text-c-blue m-r-5"/> 3 Comments</Link>
                                    <Link to='#' className="text-muted"> <i className="fa fa-heart text-c-red m-r-5"/> 5 Like</Link>
                                </ListGroup.Item>
                                <ListGroup.Item as='li' bsPrefix=' '>
                                    <div className="activity-user-img">
                                        <img src={Avatar4} className="img-radius " alt="User-Profile"/>
                                    </div>
                                    <h6 className="m-b-0">John Deo <small className="text-muted">2 hours ago</small></h6>
                                    <Row className="m-b-15 m-t-15">
                                        <Col sm="auto" className="col-sm-3">
                                            <img src={imgSlide1} alt="img" className="img-fluid wid-100"/>
                                        </Col>
                                        <Col sm="auto" className="col-sm-9">
                                            <p className="m-b-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                            <Button variant='primary' className="btn-round btn-sm">Design Web Mockup</Button>
                                        </Col>
                                    </Row>
                                    <Link to='#' className="m-r-10 text-muted"><i className="fa fa-comment text-c-blue m-r-5"/> 3 Comments</Link>
                                    <Link to='#' className="text-muted"> <i className="fa fa-heart text-c-red m-r-5"/> 5 Like</Link>
                                </ListGroup.Item>
                                <ListGroup.Item as='li' bsPrefix=' '>
                                    <div className="activity-user-img">
                                        <img src={Avatar4} className="img-radius " alt="User-Profile"/>
                                    </div>
                                    <h6 className="m-b-0">John Deo <small className="text-muted">2 hours ago</small></h6>
                                    <p className="m-b-15 m-t-15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                    <Link to='#' className="m-r-10 text-muted"><i className="fa fa-comment text-c-blue m-r-5"/> 3 Comments</Link>
                                    <Link to='#' className="text-muted"> <i className="fa fa-heart text-c-red m-r-5"/> 5 Like</Link>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>

                <Col sm={12}>
                    <Card className="table-card">
                        <Card.Header>
                            <h5>Recent Orders</h5>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <Table responsive>
                                <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Code</th>
                                    <th>Customer</th>
                                    <th>Purchased On</th>
                                    <th>Status</th>
                                    <th>Transaction ID</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><img src={p1} alt="prod img" className="img-fluid"/></td>
                                    <td>PNG002413</td>
                                    <td>Jane Elliott</td>
                                    <td>06-01-2017</td>
                                    <td><span className="label label-primary">Shipping</span></td>
                                    <td>#7234421</td>
                                </tr>
                                <tr>
                                    <td><img src={p2} alt="prod img" className="img-fluid"/></td>
                                    <td>PNG002344</td>
                                    <td>John Deo</td>
                                    <td>05-01-2017</td>
                                    <td><span className="label label-danger">Failed</span></td>
                                    <td>#7234486</td>
                                </tr>
                                <tr>
                                    <td><img src={p3} alt="prod img" className="img-fluid"/></td>
                                    <td>PNG002653</td>
                                    <td>Eugine Turner</td>
                                    <td>04-01-2017</td>
                                    <td><span className="label label-success">Delivered</span></td>
                                    <td>#7234417</td>
                                </tr>
                                <tr>
                                    <td><img src={p4} alt="prod img" className="img-fluid"/></td>
                                    <td>PNG002156</td>
                                    <td>Jacqueline Howell</td>
                                    <td>03-01-2017</td>
                                    <td><span className="label label-warning">Pending</span></td>
                                    <td>#7234454</td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-0"><i className="feather icon-arrow-up text-c-green"/>$6,456<span className="float-right"><i className="feather icon-arrow-down text-c-red"/>$2,500</span></h6>
                            <div className="mt-1">
                                <ProgressBar now={60} className="mb-4" style={{height: '6px'}} />
                            </div>
                            <span className="mt-1 d-block mb-3">This Week<span className="float-right">Previous Week</span></span>
                            <h6 className="text-c-blue mb-0">App design and development</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-0"><i className="feather icon-arrow-down text-c-red"/>$2,450<span className="float-right"><i className="feather icon-arrow-up text-c-green"/>$5,420</span></h6>
                            <div className="mt-1">
                                <ProgressBar variant="danger" now={40} className="mb-4" style={{height: '6px'}} />
                            </div>
                            <span className="mt-1 d-block mb-3">This Week<span className="float-right">Previous Week</span></span>
                            <h6 className="text-c-red mb-0">Landing page design</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Body>
                            <h6 className="mb-0"><i className="feather icon-arrow-down text-c-red"/>$8,360<span className="float-right"><i className="feather icon-arrow-up text-c-green"/>$9,400</span></h6>
                            <div className="mt-1">
                                <ProgressBar variant="success" now={40} className="mb-4" style={{height: '6px'}} />
                            </div>
                            <span className="mt-1 d-block mb-3">This Week<span className="float-right">Previous Week</span></span>
                            <h6 className="text-c-green mb-0">Mock-up design</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Product Sales</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col>
                                    <span className="text-muted">Earning Product</span>
                                    <h4 className="mt-2">20,569<span className="ml-2">USD</span></h4>
                                </Col>
                                <Col>
                                    <span className="text-muted">Yesterday</span>
                                    <h4 className="mt-2">580<span className="ml-2">USD</span></h4>
                                </Col>
                                <Col>
                                    <span className="text-muted">This Week</span>
                                    <h4 className="mt-2">5,789<span className="ml-2">USD</span></h4>
                                </Col>
                            </Row>
                            <div style={{height: '215px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Last Sales</th>
                                            <th>Name Product</th>
                                            <th>Price</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1 text-c-green">2136</h6>
                                            </td>
                                            <td>HeadPhone</td>
                                            <td>
                                                <h6 className="mb-1 text-c-green">$ 926.23</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1 text-c-red">2546</h6>
                                            </td>
                                            <td>Iphone 6</td>
                                            <td>
                                                <h6 className="mb-1 text-c-red">$ 485.85</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1 text-c-blue">2681</h6>
                                            </td>
                                            <td>Jacket</td>
                                            <td>
                                                <h6 className="mb-1 text-c-blue">$ 786.4</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1 text-c-purple">2756</h6>
                                            </td>
                                            <td>HeadPhone</td>
                                            <td>
                                                <h6 className="mb-1 text-c-purple">$ 563.45</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1 text-c-red">8765</h6>
                                            </td>
                                            <td>Sofa</td>
                                            <td>
                                                <h6 className="mb-1 text-c-red">$ 769.45</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1 text-c-yellow">3652</h6>
                                            </td>
                                            <td>Iphone 7</td>
                                            <td>
                                                <h6 className="mb-1 text-c-yellow">$ 754.45</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h6 className="mb-1 text-c-green">7456</h6>
                                            </td>
                                            <td>Jacket</td>
                                            <td>
                                                <h6 className="mb-1 text-c-green">$ 743.23</h6>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Incoming Requests</Card.Title>
                        </Card.Header>
                        <Card.Body className='p-0'>
                            <div style={{height: '265px'}}>
                                <PerfectScrollbar>
                                    <div className="mt-3 mb-3">
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-blue f-10 m-r-5"/>Incoming requests</span>
                                        <hr/>
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-green f-10 m-r-5"/>You have 2 pending requests..</span>
                                        <hr/>
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-red f-10 m-r-5"/>You have 3 pending tasks</span>
                                        <hr/>
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-yellow f-10 m-r-5"/>New order received</span>
                                        <hr/>
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-purple f-10 m-r-5"/>Incoming requests</span>
                                        <hr/>
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-green f-10 m-r-5"/>The 3 Golden Rules Professional Design..</span>
                                        <hr/>
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-red f-10 m-r-5"/>You have 4 pending tasks</span>
                                        <hr/>
                                        <span className="px-4 d-block"><i className="fas fa-circle text-c-yellow f-10 m-r-5"/>New order received</span>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <h6 className="text-center m-0"><Link to='#'>Show more</Link></h6>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3} md={6}>
                    <Card className='table-card'>
                        <Card.Header className='borderless'>
                            <Card.Title as='h5'>Total Revenue</Card.Title>
                        </Card.Header>
                        <Card.Body className='p-0'>
                            <div style={{height: '310px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                            <td>Bitcoin</td>
                                            <td>
                                                <h6 className="text-c-green">+ $145.85</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Ethereum</td>
                                            <td>
                                                <h6 className="text-c-red">- $6.368</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                            <td>Ripple</td>
                                            <td>
                                                <h6 className="text-c-green">+ $458.63</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Neo</td>
                                            <td>
                                                <h6 className="text-c-red">- $5.631</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Bitcoin</td>
                                            <td>
                                                <h6 className="text-c-red">- $75.86</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                            <td>Ethereum</td>
                                            <td>
                                                <h6 className="text-c-green">+ $453.63</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Ripple</td>
                                            <td>
                                                <h6 className="text-c-red">+ $786.63</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                            <td>Neo</td>
                                            <td>
                                                <h6 className="text-c-green">+ $145.85</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Bitcoin</td>
                                            <td>
                                                <h6 className="text-c-red">- $6.368</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                            <td>Ethereum</td>
                                            <td>
                                                <h6 className="text-c-green">+ $458.63</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Neo</td>
                                            <td>
                                                <h6 className="text-c-red">- $5.631</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Ripple</td>
                                            <td>
                                                <h6 className="text-c-red">- $75.86</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-up text-c-green f-24"/></td>
                                            <td>Bitcoin</td>
                                            <td>
                                                <h6 className="text-c-green">+ $453.63</h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><i className="fas fa-caret-down text-c-red f-24"/></td>
                                            <td>Ethereum</td>
                                            <td>
                                                <h6 className="text-c-red">+ $786.63</h6>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Last Product Sales</Card.Title>
                        </Card.Header>
                        <Card.Body className='px-0 py-0'>
                            <div style={{height: '400px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>CAMPAIGN DATE</th>
                                            <th>CLICK ?</th>
                                            <th>COST ?</th>
                                            <th>CTR ?</th>
                                            <th>ARPU ?</th>
                                            <th>ECPI ?</th>
                                            <th>ROI ?</th>
                                            <th>TREVENUE ?</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Total and average</td>
                                            <td>1300</td>
                                            <td>1025</td>
                                            <td>14005</td>
                                            <td>95,3%</td>
                                            <td>29,7%</td>
                                            <td>3,25</td>
                                            <td>2:30</td>
                                        </tr>
                                        <tr>
                                            <td>24-11-2016</td>
                                            <td>125
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>140
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={50}/>
                                                </div>
                                            </td>
                                            <td>856
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                            <td>45,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>9,7%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>7,25
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>5:26
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-10-2016</td>
                                            <td>352
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={50}/>
                                                </div>
                                            </td>
                                            <td>150
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>35,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                            <td>3,57
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>3:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={80}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-09-2017</td>
                                            <td>145
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={50}/>
                                                </div>
                                            </td>
                                            <td>869
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>453
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>76,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>6,4%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>1:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-12-2017</td>
                                            <td>458
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={50}/>
                                                </div>
                                            </td>
                                            <td>456
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                            <td>56,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>9,4%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>7,32
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>6:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-12-2017</td>
                                            <td>789
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                            <td>756
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={50}/>
                                                </div>
                                            </td>
                                            <td>432
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>39,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>3,79
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={20}/>
                                                </div>
                                            </td>
                                            <td>4:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>28-10-2016</td>
                                            <td>352
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={35}/>
                                                </div>
                                            </td>
                                            <td>150
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={50}/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                            <td>35,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>3,57
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={80}/>
                                                </div>
                                            </td>
                                            <td>3:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-09-2017</td>
                                            <td>145
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={50}/>
                                                </div>
                                            </td>
                                            <td>869
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={35}/>
                                                </div>
                                            </td>
                                            <td>453
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={65}/>
                                                </div>
                                            </td>
                                            <td>76,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>6,4%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={45}/>
                                                </div>
                                            </td>
                                            <td>1:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={75}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>12-12-2017</td>
                                            <td>458
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={45}/>
                                                </div>
                                            </td>
                                            <td>456
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                            <td>56,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={35}/>
                                                </div>
                                            </td>
                                            <td>9,4%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>7,32
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={40}/>
                                                </div>
                                            </td>
                                            <td>6:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={55}/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-12-2017</td>
                                            <td>789
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={60}/>
                                                </div>
                                            </td>
                                            <td>756
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={55}/>
                                                </div>
                                            </td>
                                            <td>432
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={70}/>
                                                </div>
                                            </td>
                                            <td>39,3%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={38}/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={30}/>
                                                </div>
                                            </td>
                                            <td>3,79
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={42}/>
                                                </div>
                                            </td>
                                            <td>4:30
                                                <div className="mt-1">
                                                    <ProgressBar style={{height: '4px'}} now={38}/>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className='new-cust-card'>
                        <Card.Header>
                            <Card.Title as='h5'>New Customers</Card.Title>
                        </Card.Header>
                        <div style={{height: '415px'}}>
                            <PerfectScrollbar>
                                <Card.Body className='p-b-0'>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>Alex Thompson</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status active"/>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">stay hungry stay foolish!</p>
                                            <span className="status active"/>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>Alex Thompson</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status deactive"><i className="far fa-clock m-r-10"/>30 min ago</span>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar4} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar5} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>Shirley Hoe</h6>
                                            </Link>
                                            <p className="m-b-0">stay hungry stay foolish!</p>
                                            <span className="status active"/>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar1} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status active"/>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar2} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>James Alexander</h6>
                                            </Link>
                                            <p className="m-b-0">stay hungry stay foolish!</p>
                                            <span className="status active"/>
                                        </div>
                                    </div>
                                    <div className="align-middle m-b-25">
                                        <img src={Avatar3} alt="user" className="img-radius align-top m-r-15"/>
                                        <div className="d-inline-block">
                                            <Link to='#'>
                                                <h6>John Doue</h6>
                                            </Link>
                                            <p className="m-b-0">Cheers!</p>
                                            <span className="status deactive"><i className="far fa-clock m-r-10"/>10 min ago</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
                <Col xl={8} md={6}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>New Products</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '415px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Product Name</th>
                                            <th>Image</th>
                                            <th>Status</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>HeadPhone</td>
                                            <td><img src={p1} alt="" className="img-20" /></td>
                                            <td>
                                                <div><label className="badge badge-light-warning">Pending</label></div>
                                            </td>
                                            <td>$10</td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16  text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Iphone 6</td>
                                            <td><img src={p2} alt="" className="img-20"/></td>
                                            <td>
                                                <div><label className="badge badge-light-danger">Cancel</label></div>
                                            </td>
                                            <td>$20</td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16  text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Jacket</td>
                                            <td><img src={p3} alt="" className="img-20"/></td>
                                            <td>
                                                <div><label className="badge badge-light-success">Success</label></div>
                                            </td>
                                            <td>$35</td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sofa</td>
                                            <td><img src={p4} alt="" className="img-20"/></td>
                                            <td>
                                                <div><label className="badge badge-light-danger">Cancel</label></div>
                                            </td>
                                            <td>$85</td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Iphone 6</td>
                                            <td><img src={p2} alt="" className="img-20"/></td>
                                            <td>
                                                <div><label className="badge badge-light-success">Success</label></div>
                                            </td>
                                            <td>$20</td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>HeadPhone</td>
                                            <td><img src={p1} alt="" className="img-20"/></td>
                                            <td>
                                                <div><label className="badge badge-light-warning">Pending</label></div>
                                            </td>
                                            <td>$50</td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Iphone 6</td>
                                            <td><img src={p2} alt="" className="img-20"/></td>
                                            <td>
                                                <div><label className="badge badge-light-danger">Cancel</label></div>
                                            </td>
                                            <td>$30</td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 ml-3 f-16 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Top Contacts</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '365px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Company</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Apple Company</td>
                                            <td>23/05/2017</td>
                                            <td>04/08/2018</td>
                                            <td><label className="badge badge-light-success">Paid</label></td>
                                        </tr>
                                        <tr>
                                            <td>Envato Pvt Ltd.</td>
                                            <td>20/03/2017</td>
                                            <td>04/08/2019</td>
                                            <td><label className="badge badge-light-danger">Unpaid</label></td>
                                        </tr>
                                        <tr>
                                            <td>Dribble Company</td>
                                            <td>13/05/2017</td>
                                            <td>03/01/2018</td>
                                            <td><label className="badge badge-light-success">Paid</label></td>
                                        </tr>
                                        <tr>
                                            <td>Adobe Family</td>
                                            <td>11/01/2016</td>
                                            <td>02/03/2017</td>
                                            <td><label className="badge badge-light-success">Paid</label></td>
                                        </tr>
                                        <tr>
                                            <td>Apple Company</td>
                                            <td>23/05/2017</td>
                                            <td>04/08/2018</td>
                                            <td><label className="badge badge-light-danger">Unpaid</label></td>
                                        </tr>
                                        <tr>
                                            <td>Apple Company</td>
                                            <td>25/05/2018</td>
                                            <td>04/12/2018</td>
                                            <td><label className="badge badge-light-success">Paid</label></td>
                                        </tr>
                                        <tr>
                                            <td>Envato Pvt Ltd.</td>
                                            <td>15/03/2018</td>
                                            <td>04/08/2016</td>
                                            <td><label className="badge badge-light-danger">Unpaid</label></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Top Contacts</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '365px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <img src={Avatar1} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0">Shirley Hoe</h6>
                                                        <p className="m-b-0">Sales executive,NY</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <h6 className="m-b-0">$78.001<i className="fas fa-level-down-alt text-c-red m-l-10"/></h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <img src={Avatar2} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0">James Alexander</h6>
                                                        <p className="m-b-0">Sales executive,EL</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <h6 className="m-b-0">$89.051<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <img src={Avatar3} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0">Shirley Hoe</h6>
                                                        <p className="m-b-0">Sales executive,NY</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <h6 className="m-b-0">$89.051<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <img src={Avatar4} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0">James Alexander</h6>
                                                        <p className="m-b-0">Sales executive,EL</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <h6 className="m-b-0">$78.001<i className="fas fa-level-down-alt text-c-red m-l-10"/></h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <img src={Avatar5} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0">Shirley Hoe</h6>
                                                        <p className="m-b-0">Sales executive,NY</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <h6 className="m-b-0">$78.001<i className="fas fa-level-down-alt text-c-red m-l-10"/></h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <img src={Avatar1} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0">John Doue</h6>
                                                        <p className="m-b-0">Sales executive,EL</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <h6 className="m-b-0">$58.769<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-inline-block align-middle">
                                                    <img src={Avatar2} alt="user" className="img-radius align-top m-r-15" style={{width: '40px'}}/>
                                                    <div className="d-inline-block">
                                                        <h6 className="m-b-0">Alex Thompson</h6>
                                                        <p className="m-b-0">Sales executive,NY</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <h6 className="m-b-0">$96.635<i className="fas fa-level-up-alt text-c-green m-l-10"/></h6>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card className='latest-update-card update-card'>
                        <Card.Header>
                            <Card.Title as='h5'>What’s New</Card.Title>
                        </Card.Header>
                        <div style={{height: '370px'}}>
                            <PerfectScrollbar>
                                <Card.Body>
                                    <div className="latest-update-box p-b-10">
                                        <div className="row p-t-20 p-b-30">
                                            <div className="col-auto text-right update-meta">
                                                <img src={Avatar1} alt="user" className="img-radius align-top update-icon"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Your Manager Posted.</h6>
                                                </Link>
                                                <p className="m-b-0">Jonny michel</p>
                                            </div>
                                        </div>
                                        <div className="row p-b-30">
                                            <div className="col-auto text-right update-meta">
                                                <i className="feather icon-briefcase bg-c-red update-icon"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">You have 3 pending Task.</h6>
                                                </Link>
                                                <p className="m-b-0">Hemilton</p>
                                            </div>
                                        </div>
                                        <div className="row p-b-30">
                                            <div className="col-auto text-right update-meta">
                                                <i className="feather icon-check f-w-600 bg-c-green update-icon"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">New Order Received.</h6>
                                                </Link>
                                                <p className="m-b-0">Hemilton</p>
                                            </div>
                                        </div>
                                        <div className="row p-b-30">
                                            <div className="col-auto text-right update-meta">
                                                <i className="feather icon-briefcase bg-c-red update-icon"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">You have 3 pending Task.</h6>
                                                </Link>
                                                <p className="m-b-0">Hemilton</p>
                                            </div>
                                        </div>
                                        <div className="row p-b-30">
                                            <div className="col-auto text-right update-meta">
                                                <img src={Avatar4} alt="user" className="img-radius align-top update-icon"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Your Manager Posted.</h6>
                                                </Link>
                                                <p className="m-b-0">Jonny michel</p>
                                            </div>
                                        </div>
                                        <div className="row p-b-30">
                                            <div className="col-auto text-right update-meta">
                                                <i className="feather icon-check f-w-600 bg-c-green update-icon"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">New Order Received.</h6>
                                                </Link>
                                                <p className="m-b-0">Shirley Hoe</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-auto text-right update-meta">
                                                <i className="feather icon-briefcase bg-c-red update-icon"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">You have 2 pending Task.</h6>
                                                </Link>
                                                <p className="m-b-0">James Alexander</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className='latest-update-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Latest Activity</Card.Title>
                        </Card.Header>
                        <div style={{height: '370px'}}>
                            <PerfectScrollbar>
                                <Card.Body>
                                    <div className="latest-update-box p-b-10">
                                        <div className="row p-t-20 p-b-20">
                                            <div className="col-auto text-right update-meta">
                                                <i className="b-primary update-icon ring"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Devlopment & Update</h6>
                                                </Link>
                                                <p className="m-b-0">Lorem ipsum dolor sit amet, <Link to='#' className="text-c-blue"> More</Link></p>
                                            </div>
                                        </div>
                                        <div className="row p-b-20">
                                            <div className="col-auto text-right update-meta">
                                                <i className="b-primary update-icon ring"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Showcases</h6>
                                                </Link>
                                                <p className="m-b-0">Lorem dolor sit amet, <Link to='#' className="text-c-blue"> More</Link></p>
                                            </div>
                                        </div>
                                        <div className="row p-b-20">
                                            <div className="col-auto text-right update-meta">
                                                <i className="b-success update-icon ring"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Miscellaneous</h6>
                                                </Link>
                                                <p className="m-b-0">Lorem ipsum dolor sit ipsum amet, <Link to='#' className="text-c-green"> More</Link></p>
                                            </div>
                                        </div>
                                        <div className="row p-b-20">
                                            <div className="col-auto text-right update-meta">
                                                <i className="b-primary update-icon ring"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Showcases</h6>
                                                </Link>
                                                <p className="m-b-0">Lorem dolor sit amet, <Link to='#' className="text-c-blue"> More</Link></p>
                                            </div>
                                        </div>
                                        <div className="row p-b-20">
                                            <div className="col-auto text-right update-meta">
                                                <i className="b-success update-icon ring"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Miscellaneous</h6>
                                                </Link>
                                                <p className="m-b-0">Lorem ipsum dolor sit ipsum amet, <Link to='#' className="text-c-green"> More</Link></p>
                                            </div>
                                        </div>
                                        <div className="row p-b-20">
                                            <div className="col-auto text-right update-meta">
                                                <i className="b-primary update-icon ring"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Devlopment</h6>
                                                </Link>
                                                <p className="m-b-0">Lorem ipsum dolor sit amet, <Link to='#' className="text-c-green"> More</Link></p>
                                            </div>
                                        </div>
                                        <div className="row p-b-0">
                                            <div className="col-auto text-right update-meta">
                                                <i className="b-primary update-icon ring"/>
                                            </div>
                                            <div className="col p-l-5">
                                                <Link to='#'>
                                                    <h6 className="m-0">Showcases</h6>
                                                </Link>
                                                <p className="m-b-0">Lorem dolor sit amet, <Link to='#' className="text-c-blue"> More</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Latest Activity</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '370px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">100</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Engagement</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-warning m-0">43%</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">480</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Likes</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-success m-0">58%</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">230</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Clicks</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-danger m-0">30%</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">480</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Likes</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-danger m-0">30%</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">500</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Clicks</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-primary m-0">40%</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">400</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Engagement</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-warning m-0">60%</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">600</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Clicks</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-success m-0">50%</label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <h3 className="m-0">900</h3>
                                            </td>
                                            <td>
                                                <p className="m-0">Likes</p>
                                            </td>
                                            <td className="text-right">
                                                <label className="badge badge-light-primary m-0">90%</label>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Customer Overview</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '465px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Customer</th>
                                            <th>Company</th>
                                            <th>Lead Score</th>
                                            <th>Date</th>
                                            <th>Tags</th>
                                            <th>Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <img src={Avatar4} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                            </td>
                                            <td>
                                                <h6 className="m-0">Shirley Hoe</h6>
                                                <p className="m-0">Sales executive , NY</p>
                                            </td>
                                            <td>Pinterest</td>
                                            <td>223</td>
                                            <td>19-11-2018</td>
                                            <td>
                                                <label className="badge badge-light-primary mr-1">Sketch</label>
                                                <label className="badge badge-light-danger">Ui</label>
                                            </td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Avatar2} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                            </td>
                                            <td>
                                                <h6 className="m-0">James Alexander</h6>
                                                <p className="m-0">Sales executive , EL</p>
                                            </td>
                                            <td>Facebook</td>
                                            <td>268</td>
                                            <td>10-10-2017</td>
                                            <td>
                                                <label className="badge badge-light-primary mr-1">Ux</label>
                                                <label className="badge badge-light-danger mr-1">Ui</label>
                                                <label className="badge badge-light-info">php</label>
                                            </td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Avatar1} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                            </td>
                                            <td>
                                                <h6 className="m-0">Shirley Hoe</h6>
                                                <p className="m-0">Sales executive,NY</p>
                                            </td>
                                            <td>Google</td>
                                            <td>293</td>
                                            <td>16-03-2018</td>
                                            <td>
                                                <label className="badge badge-light-danger mr-1">Sketch</label>
                                                <label className="badge badge-light-warning">Ui</label>
                                            </td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Avatar4} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                            </td>
                                            <td>
                                                <h6 className="m-0">Alex Thompson</h6>
                                                <p className="m-0">Sales executive,NY</p>
                                            </td>
                                            <td>Pinterest</td>
                                            <td>568</td>
                                            <td>19-11-2018</td>
                                            <td>
                                                <label className="badge badge-light-info mr-1">Ux</label>
                                                <label className="badge badge-light-success mr-1">Ui</label>
                                                <label className="badge badge-light-warning">php</label>
                                            </td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Avatar2} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                            </td>
                                            <td>
                                                <h6 className="m-0">James Alexander</h6>
                                                <p className="m-0">Sales executive,EL</p>
                                            </td>
                                            <td>Facebook</td>
                                            <td>796</td>
                                            <td>20-10-2017</td>
                                            <td>
                                                <label className="badge badge-light-primary mr-1">Sketch</label>
                                                <label className="badge badge-light-info">Ui</label>
                                            </td>

                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Avatar1} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                            </td>
                                            <td>
                                                <h6 className="m-0">John Deo</h6>
                                                <p className="m-0">Sales executive,EL</p>
                                            </td>
                                            <td>Twitter</td>
                                            <td>465</td>
                                            <td>25-11-2018</td>
                                            <td>
                                                <label className="badge badge-light-warning mr-1">Ux</label>
                                                <label className="badge badge-light-danger mr-1">Ui</label>
                                                <label className="badge badge-light-success">php</label>
                                            </td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Avatar4} alt="user" className="img-radius align-top m-r-15" style={{width:'40px'}}/>
                                            </td>
                                            <td>
                                                <h6 className="m-0">Shirley Hoe</h6>
                                                <p className="m-0">Sales executive,NY</p>
                                            </td>
                                            <td>Google</td>
                                            <td>783</td>
                                            <td>16-03-2017</td>
                                            <td>
                                                <label className="badge badge-light-danger mr-1">Sketch</label>
                                                <label className="badge badge-light-primary">Ui</label>
                                            </td>
                                            <td>
                                                <Link to='#'><i className="icon feather icon-edit f-16 text-c-green"/></Link>
                                                <Link to='#'><i className="feather icon-trash-2 f-16 ml-3 text-c-red"/></Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card className='testimonial-card table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Testimonial</Card.Title>
                        </Card.Header>
                        <div style={{height: '405px'}}>
                            <PerfectScrollbar>
                                <Card.Body>
                                    <div className="review-block">
                                        <div className="row">
                                            <div className="col-sm-auto p-r-0">
                                                <img src={Avatar1} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                            </div>
                                            <div className="col">
                                                <h6 className="m-b-10">John Deo</h6>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <ProgressBar now={85} variant='success'/>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">3.2</h6>
                                                    </div>
                                                </div>
                                                <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-auto p-r-0">
                                                <img src={Avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                            </div>
                                            <div className="col">
                                                <h6 className="m-b-10">Alex Thompson</h6>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <ProgressBar now={50} />
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">4.2</h6>
                                                    </div>
                                                </div>
                                                <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-auto p-r-0">
                                                <img src={Avatar3} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                            </div>
                                            <div className="col">
                                                <h6 className="m-b-10">John Deo</h6>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <ProgressBar now={60} variant='danger'/>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">6.5</h6>
                                                    </div>
                                                </div>
                                                <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-auto p-r-0">
                                                <img src={Avatar2} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                            </div>
                                            <div className="col">
                                                <h6 className="m-b-10">Shirley Hoe</h6>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <ProgressBar now={85} variant='warning'/>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">9.6</h6>
                                                    </div>
                                                </div>
                                                <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-auto p-r-0">
                                                <img src={Avatar1} alt="user" className="img-radius profile-img cust-img m-b-15"/>
                                            </div>
                                            <div className="col">
                                                <h6 className="m-b-10">James Alexander</h6>
                                                <div className="row align-items-center">
                                                    <div className="col">
                                                        <ProgressBar now={30} variant='success'/>
                                                    </div>
                                                    <div className="col">
                                                        <h6 className="m-b-0">5.5</h6>
                                                    </div>
                                                </div>
                                                <p className="m-t-10 m-b-0">Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
                <Col xl={8} md={6}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>New Products</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '405px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Product Code</th>
                                            <th>Customer</th>
                                            <th>Status</th>
                                            <th>Rating</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Sofa</td>
                                            <td>#PHD001</td>
                                            <td>abc@gmail.com</td>
                                            <td><label className="badge badge-light-danger">Out Stock</label></td>
                                            <td>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Computer</td>
                                            <td>#PHD002</td>
                                            <td>cdc@gmail.com</td>
                                            <td><label className="badge badge-light-success">In Stock</label></td>
                                            <td>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Mobile</td>
                                            <td>#PHD003</td>
                                            <td>pqr@gmail.com</td>
                                            <td><label className="badge badge-light-danger">Out Stock</label></td>
                                            <td>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Coat</td>
                                            <td>#PHD004</td>
                                            <td>bcs@gmail.com</td>
                                            <td><label className="badge badge-light-success">In Stock</label></td>
                                            <td>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Watch</td>
                                            <td>#PHD003</td>
                                            <td>cdc@gmail.com</td>
                                            <td><label className="badge badge-light-danger">Out Stock</label></td>
                                            <td>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Sofa</td>
                                            <td>#PHD009</td>
                                            <td>xyz@gmail.com</td>
                                            <td><label className="badge badge-light-danger">Out Stock</label></td>
                                            <td>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Coat</td>
                                            <td>#PHD005</td>
                                            <td>dfg@gmail.com</td>
                                            <td><label className="badge badge-light-success">In Stock</label></td>
                                            <td>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-muted"/></Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Project Task List</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '385px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Subject</th>
                                            <th>Regarding</th>
                                            <th>Activity Type</th>
                                            <th>Activity Status</th>
                                            <th>Owner</th>
                                            <th>Priority</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Building Marketing List</td>
                                            <td>Software pro</td>
                                            <td>Task</td>
                                            <td><label className="badge badge-light-danger">Open</label></td>
                                            <td>John Malit</td>
                                            <td>Normal</td>
                                            <td>8/8/2017</td>
                                            <td>8/9/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Project Task List</td>
                                            <td>Software pro</td>
                                            <td>Task</td>
                                            <td><label className="badge badge-light-primary">New</label></td>
                                            <td>Ken Malit</td>
                                            <td>low</td>
                                            <td>6/7/2017</td>
                                            <td>1/1/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Building Marketing List</td>
                                            <td>Software pro</td>
                                            <td>Task</td>
                                            <td><label className="badge badge-light-danger">Open</label></td>
                                            <td>John Malit</td>
                                            <td>high</td>
                                            <td>3/9/2017</td>
                                            <td>8/6/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Project Task List</td>
                                            <td>Software pro</td>
                                            <td>Task</td>
                                            <td><label className="badge badge-light-success">Close</label></td>
                                            <td>Ken Malit</td>
                                            <td>Normal</td>
                                            <td>9/4/2017</td>
                                            <td>3/6/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Building Marketing List</td>
                                            <td>Software pro</td>
                                            <td>Task</td>
                                            <td><label className="badge badge-light-primary">New</label></td>
                                            <td>John Malit</td>
                                            <td>high</td>
                                            <td>7/4/2017</td>
                                            <td>10/1/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Building Marketing List</td>
                                            <td>Software pro</td>
                                            <td>Task</td>
                                            <td><label className="badge badge-light-danger">Open</label></td>
                                            <td>Ken Malit</td>
                                            <td>low</td>
                                            <td>7/8/2017</td>
                                            <td>8/9/2018</td>
                                        </tr>
                                        <tr>
                                            <td>Project Task List</td>
                                            <td>Software pro</td>
                                            <td>Task</td>
                                            <td><label className="badge badge-light-primary">New</label></td>
                                            <td>John Malit</td>
                                            <td>Normal</td>
                                            <td>6/6/2017</td>
                                            <td>9/9/2018</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card className='widget-chat-box'>
                        <Card.Body className='p-0'>
                            <div className="row m-15">
                                <div className="col-sm-2">
                                    <i className="fas fa-bars  pop-up"/>
                                </div>
                                <div className="col-sm-8 text-center">
                                    <h5>John Henry</h5>
                                </div>
                                <div className="col-sm-2 text-right">
                                    <i className="fas fa-pencil-alt"/>
                                </div>
                            </div>
                            <div style={{height: '350px'}}>
                                <PerfectScrollbar>
                                    <div className='p-l-20 p-r-20'>
                                        <p className="text-center">12:05 A.M.</p>
                                        <div className="media">
                                            <img className="d-flex m-r-15" src={Avatar1} alt="Generic placeholder" style={{width:'60px'}} />
                                            <div className="media-body send-chat">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante.
                                                <span className="time">3 min ago</span>
                                            </div>
                                        </div>
                                        <div className="media col-sm-8 offset-md-4">
                                            <div className="media-body receive-chat">
                                                Cras sit amet nibh libero, in gravida nulla.vel metus scelerisque ante
                                                <span className="time"><i className="fas fa-check m-r-5"/>Seen 2 sec ago</span>
                                            </div>
                                        </div>
                                        <p className="text-center">11:05 A.M.</p>
                                        <div className="media">
                                            <img className="d-flex m-r-15" src={Avatar2} alt="Generic placeholder" style={{width:'60px'}} />
                                            <div className="media-body send-chat">
                                                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante.
                                                <span className="time">3 min ago</span>
                                            </div>
                                        </div>
                                        <div className="media col-sm-8 offset-md-4">
                                            <div className="media-body  receive-chat">
                                                Cras sit amet nibh libero, in gravida nulla.vel metus scelerisque ante
                                                <span className="time"><i className="fas fa-check m-r-5"/>Seen 2 sec ago</span>
                                            </div>
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                            <div className="right-icon-control m-15">
                                <div className="input-group input-group-button">
                                    <input type="text" className="form-control" placeholder="Send message" />
                                    <div className="input-group-append">
                                        <Button variant='primary' type="button"><i className="feather icon-message-circle m-0 text-white"/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card className='widget-chat-box'>
                        <Card.Header>
                            <Card.Title as='h5'>My Projects</Card.Title>
                        </Card.Header>
                        <Card.Body className='p-0'>
                            <div style={{height: '350px'}}>
                                <PerfectScrollbar>
                                    <div className='p-l-20 p-r-20'>
                                        <p className="m-b-10">New Dashboard <span className="float-right">5 Mins ago</span></p>
                                        <ListGroup as='ul' bsPrefix=' ' className="list-unstyled m-b-20">
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar3} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar1} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                        </ListGroup>
                                        <p className="m-b-10">Web Design <span className="float-right">8 Mins ago</span></p>
                                        <ListGroup as='ul' bsPrefix=' ' className="list-unstyled  m-b-20">
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar3} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                        </ListGroup>
                                        <p className="m-b-10">Android Design <span className="float-right">12 Mins ago</span></p>
                                        <ListGroup as='ul' bsPrefix=' ' className="list-unstyled m-b-20">
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar4} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar3} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                        </ListGroup>
                                        <p className="m-b-10">New Dashboard <span className="float-right">5 Mins ago</span></p>
                                        <ListGroup as='ul' bsPrefix=' ' className="list-unstyled m-b-20">
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar3} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                        </ListGroup>
                                        <p className="m-b-10">photoshop Design <span className="float-right">2 Mins ago</span></p>
                                        <ListGroup as='ul' bsPrefix=' ' className="list-unstyled  m-b-20">
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar3} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                        </ListGroup>
                                        <p className="m-b-10">Ios Design <span className="float-right">1 Mins ago</span></p>
                                        <ListGroup as='ul' bsPrefix=' ' className="list-unstyled m-b-20">
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar4} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar3} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                        </ListGroup>
                                        <p className="m-b-10">Web Design <span className="float-right">8 Mins ago</span></p>
                                        <ListGroup as='ul' bsPrefix=' ' className="list-unstyled  m-b-0">
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar2} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                            <ListGroup.Item as='li' bsPrefix=' ' className="d-inline-block"><img src={Avatar3} style={{width:'30px'}} alt="user" className="img-radius img-30 m-r-10" data-toggle="tooltip" data-placement="top" title="Tooltip on top"/></ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                            <div className="right-icon-control m-15">
                                <div className="input-group input-group-button">
                                    <input type="text" className="form-control" placeholder="Add Project" />
                                    <div className="input-group-append">
                                        <Button variant='primary' type="button"><i className="feather icon-plus m-0 text-white"/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card className='chat-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Chat</Card.Title>
                        </Card.Header>
                        <Card.Body className='p-0'>
                            <div style={{height: '350px'}}>
                                <PerfectScrollbar>
                                    <div className='p-l-20 p-r-20'>
                                        <div className="row m-b-20 received-chat">
                                            <div className="col-auto p-r-0">
                                                <img src={Avatar1} alt="user" className="img-radius" style={{width:'30px'}}/>
                                            </div>
                                            <div className="col">
                                                <div className="msg">
                                                    <p className="m-b-0">Nice to meet you!</p>
                                                </div>
                                                <p className="m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                            </div>
                                        </div>
                                        <div className="row m-b-20 send-chat">
                                            <div className="col">
                                                <div className="msg">
                                                    <p className="m-b-0">Nice to meet you!</p>
                                                </div>
                                                <p className="m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                            </div>
                                            <div className="col-auto p-l-0">
                                                <img src={Avatar2} alt="user" className="img-radius" style={{width:'30px'}}/>
                                            </div>
                                        </div>
                                        <div className="row m-b-20 received-chat">
                                            <div className="col-auto p-r-0">
                                                <img src={Avatar1} alt="user" className="img-radius" style={{width:'30px'}}/>
                                            </div>
                                            <div className="col">
                                                <div className="msg">
                                                    <p className="m-b-0">Nice to meet you!</p>
                                                    <img className="img-fluid" src={imgSlide4} alt=""/>
                                                    <img className="img-fluid" src={imgSlide5} alt=""/>
                                                </div>
                                                <p className="m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                            </div>
                                        </div>
                                        <div className="row m-b-20 send-chat">
                                            <div className="col">
                                                <div className="msg">
                                                    <p className="m-b-0">Nice to meet you!</p>
                                                </div>
                                                <p className="m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                            </div>
                                            <div className="col-auto p-l-0">
                                                <img src={Avatar2} alt="user" className="img-radius" style={{width:'30px'}}/>
                                            </div>
                                        </div>
                                        <div className="row m-b-20 received-chat">
                                            <div className="col-auto p-r-0">
                                                <img src={Avatar1} alt="user" className="img-radius" style={{width:'30px'}}/>
                                            </div>
                                            <div className="col">
                                                <div className="msg">
                                                    <p className="m-b-0">Nice to meet you!</p>
                                                    <img className="img-fluid" src={imgSlide1} alt=""/>
                                                    <img className="img-fluid" src={imgSlide2} alt=""/>
                                                </div>
                                                <p className="m-b-0"><i className="fa fa-clock-o m-r-10"/>10:20am</p>
                                            </div>
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                            <div className="right-icon-control m-15">
                                <div className="input-group input-group-button">
                                    <input type="text" className="form-control" placeholder="Send message" />
                                    <div className="input-group-append">
                                        <Button variant='success' type="button"><i className="feather icon-message-circle m-0 text-white"/></Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} md={12}>
                    <Card className='feed-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Feeds</Card.Title>
                        </Card.Header>
                        <div style={{height: '410px'}}>
                            <PerfectScrollbar>
                                <Card.Body>
                                    <div className="row m-b-25 m-t-5 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-bell badge-light-primary feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">30 min ago</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-file-text badge-light-success feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">You have 3 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-bell badge-light-primary feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">You have 4 tasks Done. <span className="text-muted float-right f-14">1 hours ago</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-file-text badge-light-success feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">You have 2 pending tasks. <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">New order received <span className="text-muted float-right f-14">4 hours ago</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-shopping-cart badge-light-danger feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">New order Done <span className="text-muted float-right f-14">Just Now</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-25 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-file-text badge-light-success feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">You have 5 pending tasks. <span className="text-muted float-right f-14">5 hours ago</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="row m-b-0 align-items-center">
                                        <div className="col-auto p-r-0">
                                            <i className="feather icon-bell badge-light-primary feed-icon"/>
                                        </div>
                                        <div className="col">
                                            <Link to='#'>
                                                <h6 className="m-b-5">You have 4 tasks Done. <span className="text-muted float-right f-14">2 hours ago</span></h6>
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </PerfectScrollbar>
                        </div>
                    </Card>
                </Col>
                <Col xl={7} md={12}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>User Activity</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '410px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>User</th>
                                            <th>Activity</th>
                                            <th>Time</th>
                                            <th>Status</th>
                                            <th className="text-right"/>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>Ida Jorgensen</td>
                                            <td>The quick brown</td>
                                            <td>3:28 PM</td>
                                            <td><span className="m-0 text-c-green">Done</span></td>
                                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"/></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>Albert Andersen</td>
                                            <td>Jumps over</td>
                                            <td>2:37 PM</td>
                                            <td><span className="m-0 text-c-red">Missed</span></td>
                                            <td className="text-right"><i className="fas fa-circle text-c-red f-10"/></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="activity-user"/></td>
                                            <td>Silje Larsen</td>
                                            <td>Dog the quick</td>
                                            <td>10:23 AM</td>
                                            <td><span className="m-0 text-c-purple">Delayed</span></td>
                                            <td className="text-right"><i className="fas fa-circle text-c-purple f-10"/></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle m-r-10" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>Ida Jorgensen</td>
                                            <td>The quick brown</td>
                                            <td>4:28 PM</td>
                                            <td><span className="m-0 text-c-green">Done</span></td>
                                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"/></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>John Deo</td>
                                            <td>Dog the quick</td>
                                            <td>2:30 PM</td>
                                            <td><span className="m-0 text-c-yellow">pending</span></td>
                                            <td className="text-right"><i className="fas fa-circle text-c-yellow f-10"/></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="activity-user"/></td>
                                            <td>Alex Thompson</td>
                                            <td>Jumps over</td>
                                            <td>4:00 PM</td>
                                            <td><span className="m-0 text-c-red">Missed</span></td>
                                            <td className="text-right"><i className="fas fa-circle text-c-red f-10"/></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>Albert Andersen</td>
                                            <td>Dog the quick</td>
                                            <td>5:37 PM</td>
                                            <td><span className="m-0 text-c-green">Done</span></td>
                                            <td className="text-right"><i className="fas fa-circle text-c-green f-10"/></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Application list</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '365px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Application</th>
                                            <th>Installs</th>
                                            <th>Created</th>
                                            <th>Budget</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Facebook</h6>
                                                <p className="m-0">Apple</p>
                                            </td>
                                            <td>
                                                <p className="mb-1">523.423</p>
                                                <span className="text-c-green m-0">+ 84 Daily</span>
                                            </td>
                                            <td>Feb 11 2017</td>
                                            <td>$ 16,244</td>
                                            <td><Link to='#' className=" badge badge-light-primary f-12">Active</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Twitter</h6>
                                                <p className="m-0">CS Form</p>
                                            </td>
                                            <td>
                                                <p className="mb-1">7.239</p>
                                                <span className="text-c-yellow m-0">+ 5 Daily</span>
                                            </td>
                                            <td>Jan 19 2017</td>
                                            <td>$ 3,937</td>
                                            <td><Link to='#' className="badge badge-light-warning f-12">Not Active</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Instagram</h6>
                                                <p className="m-0">Microsoft</p>
                                            </td>
                                            <td>
                                                <p className="mb-1">5.877</p>
                                                <span className="text-c-green m-0">+ 12 Daily</span>
                                            </td>
                                            <td>Aug 04 2017</td>
                                            <td>$ 28,039</td>
                                            <td><Link to='#' className="badge badge-light-success f-12">Paused</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Facebook</h6>
                                                <p className="m-0">Apple</p>
                                            </td>
                                            <td>
                                                <p className="mb-1">523.423</p>
                                                <span className="text-c-green m-0">+ 50 Daily</span>
                                            </td>
                                            <td>April 10 2017</td>
                                            <td>$ 16,244</td>
                                            <td><Link to='#' className=" badge badge-light-primary f-12">Active</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Twitter</h6>
                                                <p className="m-0">CS Form</p>
                                            </td>
                                            <td>
                                                <p className="mb-1">7.239</p>
                                                <span className="text-c-yellow m-0">+ 5 Daily</span>
                                            </td>
                                            <td>May 20 2018</td>
                                            <td>$ 3,937</td>
                                            <td><Link to='#' className="badge badge-light-warning f-12">Not Active</Link></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={7} md={12}>
                    <Card className='user-list table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>User Project List</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '430px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>User</th>
                                            <th>project</th>
                                            <th>Completed</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Social Media App</h6>
                                                <p className="m-0">Assigned to <span className="text-c-green">Tristan Madsen</span></p>
                                            </td>
                                            <td>326,134</td>
                                            <td className="text-c-green">68%</td>
                                            <td>October 26, 2017</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Newspaper Wordpress Web</h6>
                                                <p className="m-0">Assigned to <span className="text-c-red">Marcus Poulsen</span></p>
                                            </td>
                                            <td>110,134</td>
                                            <td className="text-c-red">46%</td>
                                            <td>September 4, 2017</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Dashboard UI Kit Design</h6>
                                                <p className="m-0">Assigned to <span className="text-c-blue">Felix Johansen</span></p>
                                            </td>
                                            <td>226,134</td>
                                            <td className="text-c-blue">31%</td>
                                            <td>November 14, 2017</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Social Media App</h6>
                                                <p className="m-0">Assigned to <span className="text-c-green">Ida Jorgensen</span></p>
                                            </td>
                                            <td>500,134</td>
                                            <td className="text-c-green">85%</td>
                                            <td>December 14, 2017</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Social Media App</h6>
                                                <p className="m-0">Assigned to <span className="text-c-red">Tristan Madsen</span></p>
                                            </td>
                                            <td>326,134</td>
                                            <td className="text-c-red">68%</td>
                                            <td>January 26, 2017</td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar4} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Newspaper Wordpress Web</h6>
                                                <p className="m-0">Assigned to <span className="text-c-blue">Marcus Poulsen</span></p>
                                            </td>
                                            <td>110,134</td>
                                            <td className="text-c-blue">46%</td>
                                            <td>April 4, 2017</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} md={12}>
                    <Card className='pill-card'>
                        <Card.Body>
                            <Tabs variant="pills" defaultActiveKey="home" transition={false} id="noanim-tab-example" className="mb-3">
                                <Tab eventKey="home" title="Developer">
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-green f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-blue f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar4} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar5} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="profile" title="Designer">
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-blue f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar5} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar4} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-green f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar4} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="All">
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-blue f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar4} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-green f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar5} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox Jumps</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline m-b-25">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-yellow f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">Over The Lazy Dog</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-timeline">
                                        <div className="media">
                                            <div className="mr-3 photo-table">
                                                <i className="fas fa-circle text-c-purple f-10 m-r-10"/>
                                                <Link to='#'><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="chat-user"/></Link>
                                            </div>
                                            <div className="media-body">
                                                <h6 className="d-inline-block m-0">The Quick Brown Fox</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of</p>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Full Width Table</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '375px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th>Id Number</th>
                                            <th>Code</th>
                                            <th>Date</th>
                                            <th>Budget</th>
                                            <th>Status</th>
                                            <th className="text-right">Ratings</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>#467</td>
                                            <td>8765482</td>
                                            <td>November 14, 2017</td>
                                            <td>$ 874.23</td>
                                            <td><Link to='#' className="badge badge-light-primary">Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#466</td>
                                            <td>2366482</td>
                                            <td>January 10, 2018</td>
                                            <td>$ 235.34</td>
                                            <td><Link to='#' className="badge badge-light-warning">Not Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#465</td>
                                            <td>8832638</td>
                                            <td>October 14, 2017</td>
                                            <td>$ 233.46</td>
                                            <td><Link to='#' className="badge badge-light-success">Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#464</td>
                                            <td>9632638</td>
                                            <td>December 17, 2017</td>
                                            <td>$ 133.46</td>
                                            <td><Link to='#' className="badge badge-light-primary">Not Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#463</td>
                                            <td>3332538</td>
                                            <td>July 14, 2017</td>
                                            <td>$ 244.46</td>
                                            <td><Link to='#' className="badge badge-light-warning">Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#467</td>
                                            <td>8765482</td>
                                            <td>November 14, 2017</td>
                                            <td>$ 874.23</td>
                                            <td><Link to='#' className="badge badge-light-primary">Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#789</td>
                                            <td>2378945</td>
                                            <td>April 16, 2018</td>
                                            <td>$ 235.34</td>
                                            <td><Link to='#' className="badge badge-light-warning">Not Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14  text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>#789</td>
                                            <td>3789645</td>
                                            <td>July 7, 2018</td>
                                            <td>$ 244.46</td>
                                            <td><Link to='#' className="badge badge-light-success">Active</Link></td>
                                            <td className="text-right"><Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-c-yellow"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                                <Link to='#'><i className="fa fa-star f-14 text-black-50"/></Link>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='table-card'>
                        <Card.Header className='borderless'>
                            <Card.Title as='h5'>Recent Users</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '384px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <tbody>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Isabella Christensen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>11 Sep 12:56</h6>
                                            </td>
                                            <td><Link to='#' className="badge badge-light-primary badge-pill f-12 mr-2">Reject</Link><Link to='#' className="badge badge-light-success badge-pill f-12 mr-2">Approve</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Mathilde Andersen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"/>11 May 10:35</h6>
                                            </td>
                                            <td><Link to='#' className="badge badge-light-danger badge-pill f-12 mr-2">Reject</Link><Link to='#' className="badge badge-light-warning badge-pill f-12 mr-2">Approve</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar3} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Karla Sorensen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>9 Feb 17:38</h6>
                                            </td>
                                            <td><Link to='#' className="badge badge-light-primary badge-pill f-12 mr-2">Reject</Link><Link to='#' className="badge badge-light-success badge-pill f-12 mr-2">Approve</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Ida Jorgensen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"/>19 May 12:56</h6>
                                            </td>
                                            <td><Link to='#' className="badge badge-light-danger badge-pill f-12 mr-2">Reject</Link><Link to='#' className="badge badge-light-warning badge-pill f-12 mr-2">Approve</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Albert Andersen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>21 July 12:56</h6>
                                            </td>
                                            <td><Link to='#' className="badge badge-light-primary badge-pill f-12 mr-2">Reject</Link><Link to='#' className="badge badge-light-success badge-pill f-12 mr-2">Approve</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar2} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Mathilde Andersen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-red f-10 m-r-15"/>11 May 10:35</h6>
                                            </td>
                                            <td><Link to='#' className="badge badge-light-danger badge-pill f-12 mr-2">Reject</Link><Link to='#' className="badge badge-light-warning badge-pill f-12 mr-2">Approve</Link></td>
                                        </tr>
                                        <tr>
                                            <td><img className="rounded-circle" style={{width:'40px'}} src={Avatar1} alt="activity-user"/></td>
                                            <td>
                                                <h6 className="mb-1">Isabella Christensen</h6>
                                                <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                            </td>
                                            <td>
                                                <h6 className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-15"/>11 Jan 12:56</h6>
                                            </td>
                                            <td><Link to='#' className="badge badge-light-primary badge-pill f-12 mr-2">Reject</Link><Link to='#' className="badge badge-light-success badge-pill f-12 mr-2">Approve</Link></td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </PerfectScrollbar>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default WidgetData;
