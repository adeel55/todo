import React, { useState, useEffect } from 'react';
import {Row, Col, Card, Dropdown, Table, ProgressBar, ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import Chart from "react-apexcharts";
import ApexCharts from 'apexcharts';

import PerfectScrollbar from 'react-perfect-scrollbar';
import useInterval from 'react-useinterval';

import completedTicketChart from './chart/completed-ticket-chart-1';
import transactionChart1 from './chart/transactions-chart-1';
import transactionChart2 from './chart/transactions-chart-2';

import storageChart from './chart/storage-chart';
import accountChart from './chart/account-chart';
import percentageChart from './chart/percentage-chart';
import deviceChart from './chart/device-chart';

import userAnalytics from './chart/user-analytics';
import sessionAnalytics from './chart/session-analytics';
import pageViewAnalytics from './chart/page-view-analytics';
import pageSessionAnalytics from './chart/page-session-analytics';
import avgSessionAnalytics from './chart/avg-session-analytics';
import bounceRateAnalytics from './chart/bounce-rate-analytics';

import timeUserChart from './chart/time-user-chart';
import horizontalBarChart from './chart/horizontal-bar-chart';
import conversionsBarChart from './chart/conversions-bar';
import siteLineChart from './chart/site-line-chart';

import satisfactionChart from './chart/satisfaction-chart';
import trafficChart from './chart/traffic-chart';
import viewChart1 from './chart/view-chart-1';
import viewChart2 from './chart/view-chart-2';
import timeChart from './chart/time-chart';

import customerChart from './chart/customer-chart';
import conversionsChart from './chart/conversions-chart';
import saleChart from './chart/sale-chart';

import revenuChart from './chart/revenu-chart';
import marketChart from './chart/market-chart';
import typeChart from './chart/type-chart';

import trafficMonitorChart from './chart/traffic-monitor-chart';

import studentChart from './chart/student-chart';
import emailChart from './chart/email-chart';
import seoChart1 from './chart/seo-chart-1';
import seoChart2 from './chart/seo-chart-2';

import uniqueVisitorChart from './chart/unique-visitor-chart';
import statisticsChart from './chart/statistics-chart';
import processComplienceChart from './chart/process-complience-chart';

import supportChart from './chart/support-card';
import avgChart1 from './chart/avrage-chart-1';
import avgChart2 from './chart/avrage-chart-2';
import avgChart3 from './chart/avrage-chart-3';
import avgChart4 from './chart/avrage-chart-4';

import userChart1 from './chart/user-chart-1';
import userChart2 from './chart/user-chart-2';
import userChart3 from './chart/user-chart-3';

import amountCard from './chart/amount-card';

import dailyVisitor from "./chart/daily-visitor";
import lineChart from "./chart/line-chart";

const WidgetChart = ({ params }) => {
    const [blockRating, setBlockRating] = useState(10);
    const [data, setData] = useState([]);
    const [latestDate, setLatestDate] = useState(new Date('11 Feb 2017 GMT').getTime());

    const dailyVisitorHandler = (unit) => {
        let minState, maxState;
        switch (unit) {
            case '1m':
                minState = new Date('28 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case '6m':
                minState = new Date('27 Sep 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            default:
            case '1y':
                minState = new Date('27 Feb 2012').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'ytd':
                minState = new Date('01 Jan 2013').getTime();
                maxState = new Date('27 Feb 2013').getTime();
                break;
            case 'all':
                minState = undefined;
                maxState = undefined;
                break;
        }

        const newDailyVisitors = {
                ...dailyVisitor.options,
                xaxis: {
                    min: minState,
                    max: maxState
                }
            };
        ApexCharts.exec(`daily-visitor`, 'updateOptions' , newDailyVisitors);
    };

    const dataProvider = (baseval) => {
        const yrange = {min: 10, max: 90};
        const newDate = latestDate + 86400000;
        const newData = {
            x: newDate,
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        };

        setLatestDate(newDate);

        const latestData = [
            ...data,
            newData
        ];

        const newSeries = [{
            ...lineChart.series,
            data: latestData
        }];

        setData(latestData);

        ApexCharts.exec(`line-chart`, 'updateSeries' , newSeries);
    };

    useEffect(() => {
        let i = 0;
        let baseval = new Date('11 Feb 2017 GMT').getTime();
        const count = 10;
        const yrange = {min: 10, max: 90};

        let newData = [];
        let newDate;

        while (i < count) {
            const x = baseval;
            const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

            newData = [...newData, {x, y}];
            newDate = baseval;
            baseval += 86400000;
            i++;
        }
        setLatestDate(newDate);
        setData(newData);
    }, [setLatestDate, setData]);

    useInterval(dataProvider, 2000, latestDate);

    return (
        <React.Fragment>
            <Row>
                <Col lg={8} md={12}>
                    <Card>
                        <Card.Header>
                            <h5>Students by Courses</h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...studentChart}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card>
                        <Card.Header>
                            <h5>Email Campaign</h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...emailChart}/>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={12} xl={4}>
                    <Row>
                        <Col lg={12} md={6}>
                            <Card className="seo-card">
                                <Card.Body className="seo-statustic">
                                    <i className="feather icon-save f-20 text-c-green"/>
                                    <h5 className="mb-1">65%</h5>
                                    <p>Memory</p>
                                </Card.Body>
                                <div className="seo-chart">
                                    <Chart {...seoChart1} />
                                </div>
                            </Card>
                        </Col>
                        <Col lg={12} md={6}>
                            <Card className="seo-card">
                                <Card.Body className="seo-statustic">
                                    <i className="feather icon-refresh-cw f-20 text-c-blue"/>
                                    <h5 className="mb-1">$46,845</h5>
                                    <p>Revenue</p>
                                </Card.Body>
                                <div className="seo-chart">
                                    <Chart {...seoChart2} />
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} xl={8}>
                    <Card className="bg-c-blue map-visitor-card">
                        <Card.Header>
                            <h5>Unique Visitor</h5>
                        </Card.Header>
                        <Card.Body className="pl-0 pb-0">
                            <Chart {...uniqueVisitorChart} />
                        </Card.Body>
                        <Card.Footer>
                            <Row className="justify-content-center text-center">
                                <Col sm="auto" className="b-r-default col-6 col-sm-4">
                                    <h6>Visits</h6>
                                    <p className="text-muted">29.703 Users (40%)</p>
                                    <ProgressBar now={40}/>
                                </Col>
                                <Col sm="auto" className="col-6 col-sm-4">
                                    <h6>Revenue</h6>
                                    <p className="text-muted">20703$ (60%)</p>
                                    <ProgressBar variant="success" now={60}/>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col lg={8} md={12}>
                    <Card>
                        <Card.Header>
                            <h5>Statistics</h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...statisticsChart}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card>
                        <Card.Header>
                            <h5>Process Compliance</h5>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <p className="f-50 d-inline-block m-t-30 m-b-30">0.4</p>
                                    <i className="feather icon-arrow-down text-c-red f-26 m-l-5"/>
                                    <span className="text-muted">2018 (Jan - Jun)</span>
                                    <div className="m-t-30">
                                        <Link to='#' className="text-underline text-c-blue"><small>Previous Quarters</small></Link>
                                    </div>
                                </Col>
                                <Col>
                                    <Chart {...processComplienceChart} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Active user</h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...userChart1} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={6}>
                    <Card>
                        <Card.Header>
                            <h5>Page view</h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...userChart2} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={12}>
                    <Card>
                        <Card.Header>
                            <h5>New installation</h5>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...userChart3} />
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xl={3}>
                    <Card className="bg-c-blue overflow-hidden amount-card">
                        <Card.Body className="pb-1">
                            <i className="feather icon-arrow-up"/>
                            <h4 className="text-white">$4600,00</h4>
                        </Card.Body>
                        <Chart {...amountCard}/>
                        <p className="text-dark">Amount Founded</p>
                    </Card>
                </Col>
                <Col md={6} xl={3}>
                    <Card className="bg-c-green overflow-hidden amount-card">
                        <Card.Body className="pb-1">
                            <i className="feather icon-arrow-down"/>
                            <h4 className="text-white">$387.00</h4>
                        </Card.Body>
                        <Chart {...amountCard}/>
                        <p className="text-dark">Balance</p>
                    </Card>
                </Col>
                <Col md={6} xl={3}>
                    <Card className="bg-c-yellow overflow-hidden amount-card">
                        <Card.Body className="pb-1">
                            <i className="feather icon-arrow-up"/>
                            <h4 className="text-white">$8350.00</h4>
                        </Card.Body>
                        <Chart {...amountCard}/>
                        <p className="text-dark">Payback Amount</p>
                    </Card>
                </Col>
                <Col md={6} xl={3}>
                    <Card className="bg-c-red overflow-hidden amount-card">
                        <Card.Body className="pb-1">
                            <i className="feather icon-arrow-down"/>
                            <h4 className="text-white">$123.00</h4>
                        </Card.Body>
                        <Chart {...amountCard}/>
                        <p className="text-dark">Planned Collection Income</p>
                    </Card>
                </Col>

                <Col xl={4} md={6}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm={6}>
                                    <h6>Support Analytics</h6>
                                </Col>
                                <Col>
                                    <Dropdown className='float-right'>
                                        <Dropdown.Toggle variant="link" id="dropdown-basic" className="dropdown-toggle text-c-blue">
                                            Last Week
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to='#'>1 week</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='#'>2 year</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='#'>3 month</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row className="align-items-center">
                                <Col sm={6}>
                                    <h2 className="mt-2 mb-0">280</h2>
                                    <span className="">Tickets</span>
                                    <h6 className="mb-0 mt-3">Close: <span className="text-success">120</span></h6>
                                    <h6>Response <span className="text-danger">2d</span></h6>
                                </Col>
                                <Col sm={6}>
                                    <Chart {...completedTicketChart} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Body>
                            <h6>Traffic tracker</h6>
                            <Row className="mt-2">
                                <Col sm={6}>
                                    <span className="d-block text-uppercase">Inbound</span>
                                    <h3 className="mt-1">180 GB</h3>
                                    <div className="mt-3">
                                        <Chart {...transactionChart1} />
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <span className="d-block text-uppercase">Outbound</span>
                                    <h3 className="mt-1">597.1 GB</h3>
                                    <div className="mt-3">
                                        <Chart {...transactionChart2} />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={12}>
                    <Card>
                        <Card.Body className='pb-0'>
                            <Row>
                                <Col sm='auto'>
                                    <h6>Cloud Computing</h6>
                                </Col>
                                <Col>
                                    <Dropdown className='float-right'>
                                        <Dropdown.Toggle variant="link" id="dropdown-basic" className="dropdown-toggle text-c-blue">
                                            Weekly
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item as={Link} to='#'>1 week</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='#'>2 year</Dropdown.Item>
                                            <Dropdown.Item as={Link} to='#'>3 month</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Row className="mt-2">
                                <Col sm="auto">
                                    <span className="d-block"><i className="fas fa-circle text-c-green f-10 m-r-10"/>Storage</span>
                                    <h6 className="ml-3 mt-1">10.5 GB</h6>
                                </Col>
                                <Col>
                                    <span className="d-block"><i className="fas fa-circle text-c-purple f-10 m-r-10"/>Bandwidth</span>
                                    <h6 className="ml-3 mt-1">50 GB</h6>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Chart {...storageChart} />
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card>
                        <Card.Body className='pb-0'>
                            <h6 className="text-c-blue mb-3">Department wise annual recurring and profit</h6>
                            <Row>
                                <Col sm='auto'>
                                    <h3>$687,578</h3>
                                    <h6><i className="feather icon-trending-down text-c-red mr-2"/>Marketing Growth</h6>
                                    <span>Measure How Fast You're Growing in<br/>current Market.<span className="text-c-blue">Learn More</span></span>
                                </Col>
                                <Col>
                                    <h3>30%</h3>
                                    <h6><i className="feather icon-trending-up text-c-blue mr-2"/>Annual profit/stakeholders</h6>
                                    <span>Ave 30% or more profite provide to investor as<br/>Anual return.<span className="text-c-blue">Learn More</span></span>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Chart {...accountChart} />
                    </Card>
                </Col>
                <Col xl={4}>
                    <Row>
                        <Col xl={12} md={6}>
                            <Card>
                                <Card.Body>
                                    <Row>
                                        <Col sm='auto'>
                                            <h6>Page view by device</h6>
                                        </Col>
                                        <Col>
                                            <Dropdown className='float-right'>
                                                <Dropdown.Toggle variant="link" id="dropdown-basic" className="dropdown-toggle text-c-blue">
                                                    Weekly
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item as={Link} to='#'>1 week</Dropdown.Item>
                                                    <Dropdown.Item as={Link} to='#'>2 year</Dropdown.Item>
                                                    <Dropdown.Item as={Link} to='#'>3 month</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm={6} className='pr-0'>
                                            <h6 className="my-3"><i className="feather icon-monitor f-20 mr-2 text-primary"/>66.6%<span className="text-c-green ml-2 f-14"><i className="feather icon-arrow-up"/>2%</span></h6>
                                            <h6 className="my-3"><i className="feather icon-tablet f-20 mr-2 text-success"/>29.7%<span className="text-c-red ml-2 f-14"><i className="feather icon-arrow-down"/>3%</span></h6>
                                            <h6 className="my-3"><i className="feather icon-smartphone f-20 mr-2 text-danger"/>32.8%<span className="text-c-green ml-2 f-14"><i className="feather icon-arrow-up"/>8%</span></h6>
                                        </Col>
                                        <Col sm={6}>
                                            <div className="chart-percent text-center">
                                                <Chart {...percentageChart}/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12} md={6}>
                            <Card>
                                <Card.Body>
                                    <Row className='d-flex align-items-center'>
                                        <Col className='pr-0'>
                                            <span className="d-block mb-1"><i className="fas fa-circle f-10 m-r-5 text-primary"/>Desktop [66.6%]</span>
                                            <span className="d-block mb-1"><i className="fas fa-circle f-10 m-r-5 text-success"/>Mobile [29.7%]</span>
                                            <span className="d-block"><i className="fas fa-circle f-10 m-r-5 text-warning"/>Tablet [38.6%]</span>
                                        </Col>
                                        <Col>
                                            <Chart {...deviceChart}/>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="no-gutters">
                <Col xl={2} md={4} sm={6}>
                    <Card>
                        <Card.Body>
                            <span>User</span>
                            <h3>798</h3>
                            <Chart {...userAnalytics} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card>
                        <Card.Body>
                            <span>Session</span>
                            <h3>486</h3>
                            <Chart {...sessionAnalytics} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card>
                        <Card.Body>
                            <span>Page view</span>
                            <h3>9454</h3>
                            <Chart {...pageViewAnalytics} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card>
                        <Card.Body>
                            <span>Page / Session</span>
                            <h3>7.15</h3>
                            <Chart {...pageSessionAnalytics} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card>
                        <Card.Body>
                            <span>Avg. Session Time</span>
                            <h3>00:04:30</h3>
                            <Chart {...avgSessionAnalytics} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={2} md={4} sm={6}>
                    <Card>
                        <Card.Body>
                            <span>Bounce Rate</span>
                            <h3>1.55%</h3>
                            <Chart {...bounceRateAnalytics} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4} md={5}>
                    <Card className='rating-bar'>
                        <Card.Body>
                            <Row className="mb-3">
                                <Col>
                                    <h6 className="m-0">Task Completed</h6>
                                    <span>Successful tested</span>
                                </Col>
                                <Col>
                                    <h2 className="text-right">60%</h2>
                                </Col>
                            </Row>
                            <Rating
                                stop={16}
                                initialRating={blockRating}
                                emptySymbol={<span className="theme-bar-block"><span/></span>}
                                fullSymbol={<span className="theme-bar-block"><span className="active"/></span>}
                                onChange={(rate) => setBlockRating(rate)}
                            />
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Session by time of day</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...timeUserChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8} md={7}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Product manufacturing completion by Region</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...horizontalBarChart} />
                        </Card.Body>
                    </Card>
                    <Row>
                        <Col xl={6} md={12}>
                            <Card>
                                <Card.Body className='pb-0'>
                                    <h6>Conversions</h6>
                                    <h4 className="m-0">0.85%<span className="text-c-blue ml-2"><i className="feather icon-arrow-up"/>0.50%</span></h4>
                                    <span>Purchased</span>
                                </Card.Body>
                                <div className='m-t-15'>
                                    <Chart {...conversionsBarChart} />
                                </div>
                            </Card>
                        </Col>
                        <Col xl={6} md={12}>
                            <Card>
                                <Card.Body>
                                    <Row className="d-flex align-items-center">
                                        <Col>
                                            <h6>Active customer <span className="d-block">on site</span></h6>
                                            <h2 className="m-0">2.86</h2>
                                            <span className="text-c-green">+85.9%</span>
                                        </Col>
                                        <Col>
                                            <Chart {...siteLineChart} />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Body>
                            <h6>Customer Satisfaction</h6>
                            <span>It takes continuous effort to maintain high customer satisfaction levels.Internal and external quality measures are often tied together.,as the opinion...</span>
                            <span className="text-c-blue d-block">Learn more..</span>
                            <Row className="d-flex justify-content-center align-items-center">
                                <Col>
                                    <Chart {...satisfactionChart} />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Marketing campaign</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...trafficChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body className='pb-0'>
                            <Row>
                                <Col>
                                    <h3>4856</h3>
                                </Col>
                                <Col className='text-right'>
                                    <span>Views</span>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className='m-t-15'>
                            <Chart {...viewChart1} />
                        </div>
                    </Card>
                    <Card>
                        <Card.Body className='pb-0'>
                            <Row>
                                <Col>
                                    <h3>678</h3>
                                </Col>
                                <Col className='text-right'>
                                    <span>Active Users</span>
                                </Col>
                            </Row>
                        </Card.Body>
                        <div className='m-t-15'>
                            <Chart {...viewChart2} />
                        </div>
                    </Card>
                </Col>
                <Col md={8}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Time on Site</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...timeChart} />
                            <Row className='mt-2'>
                                <Col>
                                    <span className="text-muted"><i className="fas fa-circle text-c-green f-10 m-r-10"/>Time on site</span>
                                </Col>
                                <Col className='text-right'>
                                    <span className="text-muted">1:31</span>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} md={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col sm='auto'>
                                    <span>Customers</span>
                                </Col>
                                <Col className='text-right'>
                                    <h2 className="mb-0">826</h2>
                                    <span className="text-c-green">8.2%<i className="feather icon-trending-up ml-1"/></span>
                                </Col>
                            </Row>
                            <Chart {...customerChart} />
                            <Row className='mt-4 text-center'>
                                <Col>
                                    <h3 className="m-0"><i className="fas fa-circle f-10 m-r-5 text-primary"/>674</h3>
                                    <span className="ml-3">New</span>
                                </Col>
                                <Col>
                                    <h3 className="m-0"><i className="fas fa-circle text-c-blue f-10 m-r-5 text-success"/>182</h3>
                                    <span className="ml-3">Return</span>
                                </Col>
                                <Col>
                                    <h3 className="m-0"><i className="fas fa-circle text-c-purple f-10 m-r-5 text-danger"/>768</h3>
                                    <span className="ml-3">Custom</span>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={7} md={12}>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body className='pb-0'>
                                    <h6>New stock <span className="text-muted">( purchased )</span></h6>
                                    <h4 className="m-0">0.85%<span className="text-info ml-2"><i className="feather icon-arrow-up"/>0.50%</span></h4>
                                </Card.Body>
                                <div className='p-t-15'>
                                    <Chart {...conversionsChart} />
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card>
                                <Card.Header>
                                    <Card.Title as='h5'>Sales Report</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Chart {...saleChart} />
                                    <Row className='mt-3 d-flex align-items-center text-center'>
                                        <Col>
                                            <h6>$1000</h6>
                                            <span>Target</span>
                                        </Col>
                                        <Col>
                                            <h6>$985</h6>
                                            <span>Last week</span>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={4} md={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Total Revenue</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...revenuChart} />
                            <span className="text-center text-muted d-block">Total sales made today</span>
                            <Row className='d-flex align-items-center text-center m-t-10'>
                                <Col>
                                    <h6>$1258</h6>
                                    <span>Target</span>
                                </Col>
                                <Col>
                                    <h6>$975</h6>
                                    <span>Last week</span>
                                </Col>
                                <Col>
                                    <h6>$500</h6>
                                    <span>Last Day</span>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Market Sales</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h3><i className="feather icon-trending-down text-c-red mr-3"/>27,695.65</h3>
                            <Row className='d-flex align-items-center text-center mt-4'>
                                <Col>
                                    <h6>Youtube</h6>
                                    <span className="text-c-red">- 16.85%</span>
                                </Col>
                                <Col>
                                    <h6>Facebook</h6>
                                    <span className="text-c-purple">+ 45.36%</span>
                                </Col>
                                <Col>
                                    <h6>Twitter</h6>
                                    <span className="text-c-blue">+ 50.69%</span>
                                </Col>
                            </Row>
                            <Chart {...marketChart} />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} md={6}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Sale report of year</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Chart {...typeChart} />
                            <div className="mt-3">
                                <span className="d-block mb-2"><i className="fas fa-circle f-10 m-r-15 text-danger"/>Desktop Computers<span className="float-right f-w-400">76.7%</span></span>
                                <span className="d-block mb-2"><i className="fas fa-circle f-10 m-r-15 text-warning"/>Smartphones<span className="float-right f-w-400">15%</span></span>
                                <span className="d-block"><i className="fas fa-circle f-10 m-r-15 text-info"/>Tablets<span className="float-right f-w-400">30%</span></span>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <h5>Store Visitors</h5>
                                </Col>
                                <Col sm='auto' className="text-right">
                                    <span>This Month</span>
                                </Col>
                            </Row>
                            <Chart {...lineChart}/>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <Card className='table-card'>
                        <Card.Header>
                            <Card.Title as='h5'>Advertising campaign monitor</Card.Title>
                        </Card.Header>
                        <Card.Body className='px-0 py-0'>
                            <Chart {...trafficMonitorChart} />
                            <div style={{height: '362px'}}>
                                <PerfectScrollbar>
                                    <Table responsive>
                                        <thead>
                                        <tr>
                                            <th><span>Campaign date</span></th>
                                            <th><span>Click</span></th>
                                            <th><span>Cost</span></th>
                                            <th><span>CTR</span></th>
                                            <th><span>ARPU</span></th>
                                            <th><span>ECPI</span></th>
                                            <th><span>ROI</span></th>
                                            <th><span>Revenue</span></th>
                                            <th><span>Conversions</span></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>08-11-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" now={60} style={{height: '4px'}} />
                                                </div>
                                            </td>
                                            <td>485
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="50"/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>45,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>8,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                            <td>10:55
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>33.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15-10-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="65"/>
                                                </div>
                                            </td>
                                            <td>523
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                            <td>736
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                            <td>78,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>6,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="44"/>
                                                </div>
                                            </td>
                                            <td>4:30
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="68"/>
                                                </div>
                                            </td>
                                            <td>76.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="90"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-08-2017</td>
                                            <td>624
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="45"/>
                                                </div>
                                            </td>
                                            <td>436
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="55"/>
                                                </div>
                                            </td>
                                            <td>756
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="95"/>
                                                </div>
                                            </td>
                                            <td>78,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="38"/>
                                                </div>
                                            </td>
                                            <td>6,4%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>9,45
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="41"/>
                                                </div>
                                            </td>
                                            <td>9:05
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="67"/>
                                                </div>
                                            </td>
                                            <td>8.63%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="41"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>11-12-2017</td>
                                            <td>423
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="54"/>
                                                </div>
                                            </td>
                                            <td>123
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>756
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="75"/>
                                                </div>
                                            </td>
                                            <td>78,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                </div>
                                            </td>
                                            <td>45,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="90"/>
                                                </div>
                                            </td>
                                            <td>6,85
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>7:45
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                            <td>33.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05-06-2015</td>
                                            <td>465
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="66"/>
                                                </div>
                                            </td>
                                            <td>463
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="50"/>
                                                </div>
                                            </td>
                                            <td>456
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>68,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>76,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="32"/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>8:45
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="71"/>
                                                </div>
                                            </td>
                                            <td>39.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="38"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>08-11-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="43"/>
                                                </div>
                                            </td>
                                            <td>485
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>769
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="69"/>
                                                </div>
                                            </td>
                                            <td>45,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="90"/>
                                                </div>
                                            </td>
                                            <td>6,7%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="80"/>
                                                </div>
                                            </td>
                                            <td>8,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="41"/>
                                                </div>
                                            </td>
                                            <td>10:55
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="55"/>
                                                </div>
                                            </td>
                                            <td>33.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>15-10-2016</td>
                                            <td>786
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="61"/>
                                                </div>
                                            </td>
                                            <td>523
                                                <div className="mt-1">
                                                    <ProgressBar variant="primary" style={{height: '4px'}} now="45"/>
                                                </div>
                                            </td>
                                            <td>736
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>78,3%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="60"/>
                                                </div>
                                            </td>
                                            <td>6,6%
                                                <div className="mt-1">
                                                    <ProgressBar variant="info" style={{height: '4px'}} now="30"/>
                                                </div>
                                            </td>
                                            <td>7,56
                                                <div className="mt-1">
                                                    <ProgressBar variant="danger" style={{height: '4px'}} now="40"/>
                                                </div>
                                            </td>
                                            <td>4:30
                                                <div className="mt-1">
                                                    <ProgressBar variant="warning" style={{height: '4px'}} now="70"/>
                                                </div>
                                            </td>
                                            <td>76.8%
                                                <div className="mt-1">
                                                    <ProgressBar variant="success" style={{height: '4px'}} now="40"/>
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
                <Col xl={4} md={12}>
                    <Card>
                        <Card.Body className='pb-0'>
                            <h2 className="m-0">350</h2>
                            <span className="text-c-blue">Support Requests</span>
                            <p className="mb-3 mt-3">Total number of support requests that come in.</p>
                        </Card.Body>
                        <Card.Body className='p-0'>
                            <Chart {...supportChart} />
                        </Card.Body>
                        <Card.Footer className='bg-primary text-white'>
                            <Row className='text-center'>
                                <Col>
                                    <h4 className="m-0 text-white">10</h4>
                                    <span>Open</span>
                                </Col>
                                <Col>
                                    <h4 className="m-0 text-white">5</h4>
                                    <span>Running</span>
                                </Col>
                                <Col>
                                    <h4 className="m-0 text-white">3</h4>
                                    <span>Solved</span>
                                </Col>
                            </Row>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={8} md={12}>
                    <Row>
                        <Col>
                            <Card className='mrr-card'>
                                <Card.Body className='mb-3'>
                                    <span className="d-flex align-items-center"><i className="fab fa-bitcoin text-c-blue f-22 m-r-5"/>Bitcoin</span>
                                </Card.Body>
                                <div className="position-absolute bottom-chart w-100">
                                    <Chart {...avgChart1} />
                                </div>
                                <Card.Body>
                                    <span className="float-right">Goal: $75</span>
                                    <h3 className="m-0">$80</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mrr-card'>
                                <Card.Body className='mb-3'>
                                    <span className="d-flex align-items-center"><i className="fab fa-ethereum text-c-green f-22 m-r-5"/>Ethereum</span>
                                </Card.Body>
                                <div className="position-absolute bottom-chart w-100">
                                    <Chart {...avgChart2} />
                                </div>
                                <Card.Body>
                                    <span className="float-right">Goal: $75</span>
                                    <h3 className="m-0">$80</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card className='bg-danger text-white mrr-card'>
                                <Card.Body className='mb-3'>
                                    <span>Total ticket Resolved</span>
                                </Card.Body>
                                <div className="position-absolute bottom-chart w-100">
                                    <Chart {...avgChart3} />
                                </div>
                                <Card.Body>
                                    <span className="float-right">pending: 75</span>
                                    <h3 className="m-0 text-white">400</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='bg-warning text-white mrr-card'>
                                <Card.Body className='mb-3'>
                                    <span>Avg. Customer Satisfaction</span>
                                </Card.Body>
                                <div className="position-absolute bottom-chart w-100">
                                    <Chart {...avgChart4} />
                                </div>
                                <Card.Body>
                                    <span className="float-right">Reopen: 20%</span>
                                    <h3 className="m-0 text-white">75%</h3>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col sm={12}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Daily Visitor</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ButtonToolbar>
                                <ToggleButtonGroup variant="radio" name="options" defaultValue='1y'>
                                    <ToggleButton variant='outline-primary' value='1m' size="sm" onClick={() => dailyVisitorHandler('1m')}>1M</ToggleButton>
                                    <ToggleButton variant='outline-primary' value='6m' size="sm" onClick={() => dailyVisitorHandler('6m')}>6M</ToggleButton>
                                    <ToggleButton variant='outline-primary' value='1y' size="sm" onClick={() => dailyVisitorHandler('1y')}>1Y</ToggleButton>
                                    <ToggleButton variant='outline-primary' value='ytd' size="sm" onClick={() => dailyVisitorHandler('ytd')}>YTD</ToggleButton>
                                    <ToggleButton variant='outline-primary' value='all' size="sm" onClick={() => dailyVisitorHandler('all')}>All</ToggleButton>
                                </ToggleButtonGroup>
                            </ButtonToolbar>
                            <Chart {...dailyVisitor} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default WidgetChart;
