import React from 'react';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom';
import { Col, Row, Card, Table } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar';
import ProductCard from "../../../components/Widgets/Statistic/ProductCard";

import accountChart from './chart/sales-account-chart';
import satisfactionChart from './chart/sales-satisfaction-chart';

import p1 from '../../../assets/images/widget/p1.jpg';
import p2 from '../../../assets/images/widget/p2.jpg';
import p3 from '../../../assets/images/widget/p3.jpg';
import p4 from '../../../assets/images/widget/p4.jpg';

const DashSales = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={3} md={6}>
                    <ProductCard params={{class: 'bg-c-red', title: 'Total Profit', primaryText: '$1,783', icon: 'fas fa-money-bill-alt'}}/>
                </Col>
                <Col xl={3} md={6}>
                    <ProductCard params={{class: 'bg-c-blue', title: 'Total Orders', primaryText: '15,830', icon: 'fas fa-database'}}/>
                </Col>
                <Col xl={3} md={6}>
                    <ProductCard params={{class: 'bg-c-green', title: 'Average Price', primaryText: '$6,780', icon: 'fas fa-dollar-sign'}}/>
                </Col>
                <Col xl={3} md={6}>
                    <ProductCard params={{class: 'bg-c-yellow', title: 'Product Sold', primaryText: '6,784', icon: 'fas fa-tags'}}/>
                </Col>

                <Col xl={7} md={12}>
                    <Card>
                        <Card.Header>
                            <h5>Department wise annual recurring and profit</h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...accountChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} md={12}>
                    <Card className='feed-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Feeds</Card.Title>
                        </Card.Header>
                        <div style={{height: '385px'}}>
                            <PerfectScrollbar>
                                <Card.Body>
                                    <div className="row m-b-25 align-items-center">
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

                <Col md={6}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>New Products</Card.Title>
                        </Card.Header>
                        <Card.Body className='pb-0'>
                            <div style={{height: '340px'}}>
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
                    <Card>
                        <Card.Body>
                            <h6>Customer Satisfaction</h6>
                            <span>It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion...</span>
                            <Link to='#' className="text-c-blue d-block">Learn more..</Link>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col>
                                    <Chart {...satisfactionChart} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default DashSales;
