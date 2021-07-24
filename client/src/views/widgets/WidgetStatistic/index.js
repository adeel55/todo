import React from 'react';
import { Row, Col } from 'react-bootstrap';

import NotificationCard from "../../../components/Widgets/Statistic/NotificationCard";
import OrderCard from "../../../components/Widgets/Statistic/OrderCard";
import TransactionCard from "../../../components/Widgets/Statistic/TransactionCard";
import UserRadialCard from "../../../components/Widgets/Statistic/UserRadialCard";

import Avatar1 from '../../../assets/images/user/avatar-1.jpg';
import Avatar2 from '../../../assets/images/user/avatar-2.jpg';
import Avatar3 from '../../../assets/images/user/avatar-3.jpg';
import Avatar4 from '../../../assets/images/user/avatar-4.jpg';
import SeoImg1 from '../../../assets/images/widget/seoimg1.jpg';
import SeoImg2 from '../../../assets/images/widget/seoimg2.jpg';
import SeoImg3 from '../../../assets/images/widget/seoimg3.jpg';

import SocialCard from "../../../components/Widgets/Statistic/SocialCard";
import StatisticCard from "../../../components/Widgets/Statistic/StatisticCard";
import SummaryCard from "./SummaryCard";
import SportCard from "./SportsCard";
import PopularCard from "./PopularCard";
import WeatherCard from "../../../components/Widgets/Statistic/WeatherCard";
import TaskStatusCard from "../../../components/Widgets/Statistic/TaskStatusCard";
import WeatherLiteCard from "../../../components/Widgets/Statistic/WeatherLiteCard";
import CompanyCard from "../../../components/Widgets/Statistic/CompanyCard";
import ProductCard from "../../../components/Widgets/Statistic/ProductCard";
import ProjectCard from "../../../components/Widgets/Statistic/ProjectCard";
import TicketCard from "../../../components/Widgets/Statistic/TicketCard";
import AnalyticCard from "../../../components/Widgets/Statistic/AnalyticCard";
import ProfileCard from "./ProfileCard";
import SeoCard from "../../../components/Widgets/Statistic/SeoCard";

const WidgetStatistic = () => {
    return (
        <React.Fragment>
            <Row>
                {/* notification cards */}
                <Col md={6} xl={3}>
                    <NotificationCard params={{class: 'bg-c-blue', icon: 'fa fa-envelope', primaryText: '123', secondaryText: 'Unread Mails'}} />
                </Col>
                <Col md={6} xl={3}>
                    <NotificationCard params={{class: 'bg-c-green', icon: 'fa fa-camera', primaryText: '123', secondaryText: 'Image Upload'}} />
                </Col>
                <Col md={6} xl={3}>
                    <NotificationCard params={{class: 'bg-c-yellow', icon: 'fa fa-comments', primaryText: '123', secondaryText: 'Total Messages'}} />
                </Col>
                <Col md={6} xl={3}>
                    <NotificationCard params={{class: 'bg-c-red', icon: 'fa fa-shopping-cart', primaryText: '123', secondaryText: 'Orders Post'}} />
                </Col>

                {/* order cards */}
                <Col md={6} xl={3}>
                    <OrderCard params={{title: 'Orders Received', class: 'bg-c-blue', icon: 'feather icon-shopping-cart', primaryText: '486', secondaryText: 'Completed Orders', extraText: '351'}} />
                </Col>
                <Col md={6} xl={3}>
                    <OrderCard params={{title: 'Total Sales', class: 'bg-c-green', icon: 'feather icon-tag', primaryText: '1641', secondaryText: 'This Month', extraText: '213'}} />
                </Col>
                <Col md={6} xl={3}>
                    <OrderCard params={{title: 'Revenue', class: 'bg-c-yellow', icon: 'feather icon-repeat', primaryText: '$42,562', secondaryText: 'This Month', extraText: '$5,032'}} />
                </Col>
                <Col md={6} xl={3}>
                    <OrderCard params={{title: 'Total Profit', class: 'bg-c-red', icon: 'feather icon-award', primaryText: '$9,562', secondaryText: 'This Month', extraText: '$542'}} />
                </Col>

                {/* transaction card */}
                <Col md={6} xl={4}>
                    <TransactionCard params={{
                        headerClass: 'bg-c-red',
                        title: 'Not Complete',
                        titleCaption: 'Cycle ends in 22 days',
                        headerRight: (
                            <div className="transection-preogress running-75">
                                <p className="m-b-0">44%</p>
                            </div>
                        ),
                        profileText: 'RT',
                        primaryTitle: 'Registered Respiratory',
                        primaryText: 'Therapist',
                        secondaryText: 'RT 334445566',
                        leftLink: {
                            to: '#',
                            label: 'Report CE',
                            icon: 'fa fa-plus-circle'
                        },
                        rightLink: {
                            to: '#',
                            label: 'Transcript',
                            icon: 'fa fa-eye'
                        }
                    }} />
                </Col>
                <Col md={6} xl={4}>
                    <TransactionCard params={{
                        headerClass: 'bg-c-green',
                        title: 'Completed',
                        titleCaption: 'Cycle ends before 2 days',
                        headerRight: (
                            <div className="transection-preogress complited">
                                <span className="fa fa-check f-20"/>
                            </div>
                        ),
                        profileText: 'RN',
                        primaryTitle: 'Registered Nurse',
                        primaryText: 'Nurse',
                        secondaryText: 'RN 334445566',
                        leftLink: {
                            to: '#',
                            label: 'Report CE',
                            icon: 'fa fa-plus-circle'
                        },
                        rightLink: {
                            to: '#',
                            label: 'Transcript',
                            icon: 'fa fa-eye'
                        }
                    }} />
                </Col>
                <Col md={6} xl={4}>
                    <TransactionCard params={{
                        headerClass: 'bg-c-blue',
                        title: 'Delay',
                        titleCaption: 'Next cycle starts Feb 2 2021',
                        headerRight: (
                            <div className="transection-preogress complited">
                                <span className="fa fa-check f-20"/>
                            </div>
                        ),
                        profileText: 'MT',
                        primaryTitle: 'Massage',
                        primaryText: 'Therapist',
                        secondaryText: 'MT 334445566',
                        leftLink: {
                            to: '#',
                            label: 'Report CE',
                            icon: 'fa fa-plus-circle'
                        },
                        rightLink: {
                            to: '#',
                            label: 'Transcript',
                            icon: 'fa fa-eye'
                        }
                    }} />
                </Col>

                {/* user radial card */}
                <Col md={6} xl={12}>
                    <Row>
                <Col sm={6} lg={6} xl={3}>
                    <UserRadialCard params={{avatar: Avatar1, primaryText: '3', class: 'text-c-red', secondaryText: 'From 6 GB'}}/>
                </Col>
                <Col sm={6} lg={6} xl={3}>
                    <UserRadialCard params={{avatar: Avatar2, primaryText: '85%', class: 'text-c-green', secondaryText: 'From 6 GB'}}/>
                </Col>
                <Col sm={6} lg={6} xl={3}>
                    <UserRadialCard params={{avatar: Avatar3, primaryText: '73%', class: 'text-c-blue', secondaryText: 'From 6 GB'}}/>
                </Col>
                <Col sm={6} lg={6} xl={3}>
                    <UserRadialCard params={{avatar: Avatar4, primaryText: '6', class: 'text-c-yellow', secondaryText: 'From 6 GB'}}/>
                </Col>
                    </Row>
                </Col>

                {/* social card */}
                <Col sm={12} md={4}>
                    <SocialCard params={{icon: 'fa fa-envelope-open', class: 'blue', variant: 'primary', primaryTitle: '8.62k', primaryText: 'Subscribers', secondaryText: 'Your main list is growing', label: 'Manage List'}}/>
                </Col>
                <Col sm={12} md={4}>
                    <SocialCard params={{icon: 'fab fa-twitter', class: 'green', variant: 'success', primaryTitle: '+40', primaryText: 'Followers', secondaryText: 'Your main list is growing', label: 'Check them out'}}/>
                </Col>
                <Col sm={12} md={4}>
                    <SocialCard params={{icon: 'fa fa-puzzle-piece', class: 'red', variant: 'danger', primaryText: 'Business Plan', secondaryText: 'This is your current active plan', label: 'Upgrade to VIP'}}/>
                </Col>

                {/* statistic card*/}
                <Col md={6} lg={3}>
                    <StatisticCard params={{class: 'blue', variant: 'primary', title: 'Articles', primaryText: '56', secondaryText: 'Total', footerText: 'Draft: 56'}}/>
                </Col>
                <Col md={6} lg={3}>
                    <StatisticCard params={{class: 'green', variant: 'success', title: 'Categories', primaryText: '14', secondaryText: 'Total', footerText: 'User: 14'}}/>
                </Col>
                <Col md={6} lg={3}>
                    <StatisticCard params={{class: 'red', variant: 'danger', title: 'Tickets', primaryText: '85', secondaryText: 'Total', footerText: 'Closed Today: 85'}}/>
                </Col>
                <Col md={6} lg={3}>
                    <StatisticCard params={{class: 'yellow', variant: 'warning', title: 'Forums', primaryText: '42', secondaryText: 'Total', footerText: 'Unanswered: 42'}}/>
                </Col>

                <Col lg={8} md={12}>
                    <SummaryCard/>
                    <SportCard/>
                </Col>
                <Col lg={4} md={12}>
                    <PopularCard/>
                </Col>

                {/* weather & task status card */}
                <Col xl={4} md={6}>
                    <WeatherCard params={{location: 'New York , NY', time: 'Monday 2:00 PM', temperature: '23', caption: 'Partly Cloudy'}} />
                </Col>
                <Col xl={4} md={6}>
                    <TaskStatusCard params={{title: 'Overdue tasks', icon: 'feather icon-arrow-up', class: 'text-c-green', primaryTitle: '4', primaryText: '15%', secondaryText: 'Last Month: 6'}} />
                </Col>
                <Col xl={4} md={6}>
                    <WeatherLiteCard params={{class: 'blue', temperature: '19', caption: 'Sunny', icon: 'feather icon-sun', location: 'New York , NY'}} />
                </Col>

                {/* company card */}
                <Col xl={4} md={12}>
                    <CompanyCard params={{title: 'Impressions', primaryText: '1,563', secondaryText: 'May 23 - June 01 (2020)', icon: 'fas fa-eye', class: 'text-c-blue', variant: 'primary'}}/>
                </Col>
                <Col xl={4} md={12}>
                    <CompanyCard params={{title: 'Goal', primaryText: '30,564', secondaryText: 'May 28 - June 01 (2020)', icon: 'fas fa-bullseye', class: 'text-c-green', variant: 'success'}}/>
                </Col>
                <Col xl={4} md={12}>
                    <CompanyCard params={{title: 'Impact', primaryText: '42.6%', secondaryText: 'May 30 - June 01 (2020)', icon: 'fas fa-hand-paper', class: 'text-c-yellow', variant: 'warning'}}/>
                </Col>

                {/* product card */}
                <Col xl={3} md={6}>
                    <ProductCard params={{
                        class: 'bg-c-red',
                        title: 'Total Profit',
                        primaryText: '$1,783',
                        secondaryText: ( <React.Fragment>
                            <span className="m-r-10">+11%</span>From Previous Month
                        </React.Fragment> ),
                        icon: 'fas fa-money-bill-alt'
                    }}/>
                </Col>
                <Col xl={3} md={6}>
                    <ProductCard params={{
                        class: 'bg-c-blue',
                        title: 'Total Orders',
                        primaryText: '15,830',
                        secondaryText: ( <React.Fragment>
                            <span className="m-r-10">+12%</span>From Previous Month
                        </React.Fragment> ),
                        icon: 'fas fa-database'
                    }}/>
                </Col>
                <Col xl={3} md={6}>
                    <ProductCard params={{
                        class: 'bg-c-green',
                        title: 'Average Price',
                        primaryText: '$6,780',
                        secondaryText: ( <React.Fragment>
                            <span className="m-r-10">+52%</span>From Previous Month
                        </React.Fragment> ),
                        icon: 'fas fa-dollar-sign'
                    }}/>
                </Col>
                <Col xl={3} md={6}>
                    <ProductCard params={{
                        class: 'bg-c-yellow',
                        title: 'Product Sold',
                        primaryText: '6,784',
                        secondaryText: ( <React.Fragment>
                            <span className="m-r-10">+85%</span>From Previous Month
                        </React.Fragment> ),
                        icon: 'fas fa-tags'
                    }}/>
                </Col>

                {/* project card */}
                <Col xl={4} md={12}>
                    <ProjectCard params={{primaryTitle: 'Ticket Answered', secondaryTitle: 'Live Update', class: 'text-c-red', variant: 'danger', primaryText: '327', icon: 'far fa-calendar-check', secondaryText: '10 Days', badge: '53%'}}/>
                </Col>
                <Col xl={4} md={12}>
                    <ProjectCard params={{primaryTitle: 'Project Launched', secondaryTitle: 'Live Update', class: 'text-c-green', variant: 'success', primaryText: 'Year', icon: 'far fa-paper-plane', secondaryText: '623', badge: '76%'}}/>
                </Col>
                <Col xl={4} md={12}>
                    <ProjectCard params={{primaryTitle: 'Unique Innovation', secondaryTitle: 'Live Update', class: 'text-c-yellow', variant: 'warning', primaryText: '1 Month', icon: 'far fa-lightbulb', secondaryText: '248', badge: '73%'}}/>
                </Col>

                {/* ticket card */}
                <Col xl={3} md={6}>
                    <TicketCard params={{badgeText: 'Open Tickets', badgeIcon: 'fas fa-folder-open', class: 'text-c-red', variant: 'danger', primaryText: '128', secondaryText: 'Tickets', caption: 'From Previous Month', icon: 'fas fa-caret-down'}} />
                </Col>
                <Col xl={3} md={6}>
                    <TicketCard params={{badgeText: 'Close Tickets', badgeIcon: 'fas fa-file-archive', class: 'text-c-blue', variant: 'primary', primaryText: '134', secondaryText: 'Tickets', caption: 'From Previous Month', icon: 'fas fa-caret-up'}} />
                </Col>
                <Col xl={3} md={6}>
                    <TicketCard params={{badgeText: 'New Clients', badgeIcon: 'fas fa-users', class: 'text-c-green', variant: 'success', primaryText: '307', secondaryText: 'Clients', caption: 'From Previous Month', icon: 'fas fa-caret-up'}} />
                </Col>
                <Col xl={3} md={6}>
                    <TicketCard params={{badgeText: 'New Orders', badgeIcon: 'fas fa-database', class: 'text-c-yellow', variant: 'warning', primaryText: '231', secondaryText: 'Orders', caption: 'From Previous Month', icon: 'fas fa-caret-up'}} />
                </Col>

                {/* analytic card */}
                <Col xl={4} md={12}>
                    <AnalyticCard params={{class: 'green', badgeIcon: 'fas fa-shopping-cart', icon: 'fas fa-caret-up', primaryTitle: '15,678', secondaryTitle: 'Total Sales', primaryText: 'Total Income : ', secondaryText: '$2,451', caption: '10%'}} />
                </Col>
                <Col xl={4} md={12}>
                    <AnalyticCard params={{class: 'blue', badgeIcon: 'fas fa-users', icon: 'fas fa-caret-up', primaryTitle: '1,678', secondaryTitle: 'Total Users', primaryText: 'Total Revenue : ', secondaryText: '$2,451', caption: '30%'}} />
                </Col>
                <Col xl={4} md={12}>
                    <AnalyticCard params={{class: 'red', badgeIcon: 'fas fa-file-code', icon: 'fas fa-caret-down', primaryTitle: '15,678', secondaryTitle: 'Total Project', primaryText: 'Active Projects : ', secondaryText: '$2,451', caption: '10%'}} />
                </Col>

                <Col md={4}>
                    <ProfileCard/>
                </Col>
                {/* seo card */}
                <Col md={8}>
                    <Row>
                        <Col xl={8} lg={12}>
                            <SeoCard params={{img: SeoImg1, class: 'bg-c-blue', title: 'Traffic', primaryText: 'Devices and resolution', secondaryText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.'}} />
                        </Col>
                        <Col xl={4} lg={12}>
                            <Row>
                                <Col sm={12}>
                                    <SeoCard params={{img: SeoImg2, title: (<React.Fragment><i className="fa fa-caret-up text-c-green m-r-10"/> +52%</React.Fragment>), primaryText: 'New Users', secondaryText: 'Calculated in 7 days'}} />
                                </Col>
                                <Col sm={12}>
                                    <SeoCard params={{img: SeoImg3, title: (<React.Fragment><i className="fa fa-caret-down text-c-red m-r-10"/> -82%</React.Fragment>), primaryText: 'Bounce Rate', secondaryText: 'Calculated in 7 days'}} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </React.Fragment>
    );
};

export default WidgetStatistic;
