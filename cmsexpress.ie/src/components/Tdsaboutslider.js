
import React from 'react';
import {

    Row, Col, Progress
} from 'reactstrap';
import Icofont from 'react-icofont';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Tdsaboutslider.css';

class Tdsaboutslider extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (

            <OwlCarousel
                className="owl-theme"
                loop
                margin={10}
                nav={false}
                items="1"
                dots={true}
                lazyLoad={true}

            >


                <div className="item">
                    <div className="title-box mb-0 text-left">
                        <h2 className="mb-0">About  <b>CMS Express</b></h2>
                        <h4 className="mt-0 mb-2 sub-title">We Are Google Cloud Computing Specialist in </h4>
                        <ul>
                            <li>
                                <h4 className="mt-0 mb-2 sub-title"><span Style="padding-left: 20px">SME's Cloud Setup</span></h4>
                            </li>
                            <li>
                                <h4 className="mt-0 mb-2 sub-title"><span Style="padding-left: 20px">System Migration</span></h4>
                            </li>
                            <li>
                                <h4 className="mt-0 mb-2 sub-title"><span Style="padding-left: 20px">Cloud E-Commerce</span></h4>
                            </li>
                            <li>
                                <h4 className="mt-0 mb-2 sub-title"><span Style="padding-left: 20px">Data Analysis</span></h4>
                            </li>
                              <li>
                                <h4 className="mt-0 mb-2 sub-title"><span Style="padding-left: 20px">Process Automation</span></h4>
                            </li>
                        </ul>

                    </div>
                    <Row className="mt-4" >
                        <Col className="text-left"><h6 className="mb-0">Process Automation</h6></Col>
                        <Col className="text-right"><h6 className="mb-0">95%</h6></Col>
                    </Row>
                    <Progress value="95" animated color="orange" className="mb-3" />
                    <Row>
                        <Col className="text-left"><h6 className="mb-0">Cloud E-Commerce</h6></Col>
                        <Col className="text-right"><h6 className="mb-0">75%</h6></Col>
                    </Row>
                    <Progress value={95} animated color="orange" className="mb-3" />
                    <Row>
                        <Col className="text-left"><h6 className="mb-0">Data Analysis</h6></Col>
                        <Col className="text-right"><h6 className="mb-0">55%</h6></Col>
                    </Row>
                    <Progress value={95} animated color="orange" className="mb-3" />
                    <Row>
                        <Col className="text-left"><h6 className="mb-0">Process Automation</h6></Col>
                        <Col className="text-right"><h6 className="mb-0">88%</h6></Col>
                    </Row>
                    <Progress value="92" animated color="orange" />

                </div>


                <div className="item">
                    <div className="title-box text-left mb-0">
                        <h2 className="mb-0">Know About Our   <b>Mission</b></h2>
                        <h4 className="mt-0 mb-2 sub-title">Enable our client to move from  <span>in premises to the Cloud</span></h4>
                    </div>
                    <p>“Simplicity is a great virtue but it requires hard work to achieve it and education to appreciate it. And to make matters worse: complexity sells better.”.</p>
                    <p>Edsger Wybe Dijkstra.</p>

                </div>

                <div className="item">
                    <div className="title-box text-left mb-0">
                        <h2 className="mb-0">Why Choose  <b>Us</b></h2>
                        <h4 className="mt-0 mb-2 sub-title">We believe in <span>Simplicity & efficiency</span></h4>
                        <p>When an unknown printer took a galley of type and scrambled.</p>
                    </div>
                    <div className="why-choose">
                        <Row noGutters>
                            <Col xs="6" sm="6" md="4">
                                <div className="why-box text-center">
                                    <Icofont icon="icofont-drag2" />
                                    <h5>Perfect Design</h5>
                                </div>
                            </Col>
                            <Col xs="6" sm="6" md="4">
                                <div className="why-box text-center">
                                    <Icofont icon="icofont-live-support" />
                                    <h5>Perfect Design</h5>
                                </div>
                            </Col>
                            <Col xs="6" sm="6" md="4">
                                <div className="why-box text-center">
                                    <Icofont icon="icofont-support" />
                                    <h5>Friendly Support</h5>
                                </div>
                            </Col>
                            <Col xs="6" sm="6" md="4">
                                <div className="why-box text-center">
                                    <Icofont icon="icofont-unique-idea" />
                                    <h5>Unique Design</h5>
                                </div>
                            </Col>
                            <Col xs="6" sm="6" md="4">
                                <div className="why-box text-center">
                                    <Icofont icon="icofont-team" />
                                    <h5>Expert Team</h5>
                                </div>
                            </Col>
                            <Col xs="6" sm="6" md="4">
                                <div className="why-box text-center">
                                    <Icofont icon="icofont-search-user" />
                                    <h5>SEO & Marketing</h5>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>

            </OwlCarousel>

        );

    }



}

export default Tdsaboutslider;