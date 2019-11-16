import React, { Component } from 'react';
//import { Link } from 'react-router';


//Images
import logoImg from '../img/core-img/logo.png';
import mapImg from '../img/core-img/map.png';
import callImg from '../img/core-img/call.png';
import messageImg from '../img/core-img/message.png';

const Footer = (props) => {
    return (
        <footer className="footer-area clearfix" style={{marginTop: 100 + 'px'}}>
                    <div className="top-footer-area section_padding_100_0">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget mb-100">
                                        <a href="#" className="mb-50 d-block"><img src={logoImg} alt=""/></a>
                                        <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellent esque sit amet tellus blandit. Etiam nec odio vestibul.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget mb-100">
                                        <h5>Fast links</h5>
                                        <ul>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">Testimonials</a></li>
                                            <li><a href="#">Services &amp; Features</a></li>
                                            <li><a href="#">Accordions and tabs</a></li>
                                            <li><a href="#">Menu ideas</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget mb-100">
                                        <h5>Blog</h5>
                                        <div className="footer-single--blog-post">
                                            <a href="#" className="blog-post-date">
                                                <p>23 September, 2017</p>
                                            </a>
                                            <a href="#" className="blog-post-title">
                                                <h6>Why we love stock photos</h6>
                                            </a>
                                        </div>
                                        <div className="footer-single--blog-post">
                                            <a href="#" className="blog-post-date">
                                                <p>22 September, 2017</p>
                                            </a>
                                            <a href="#" className="blog-post-title">
                                                <h6>Designin on grid. A few rules. </h6>
                                            </a>
                                        </div>
                                        <div className="footer-single--blog-post">
                                            <a href="#" className="blog-post-date">
                                                <p>20 September, 2017</p>
                                            </a>
                                            <a href="#" className="blog-post-title">
                                                <h6>2017 World Design Congress</h6>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="single-footer-widget mb-100">
                                        <h5>Contact Info</h5>
                                        <div className="footer-single-contact-info d-flex">
                                            <div className="contact-icon">
                                                <img src={mapImg} alt=""/>
                                            </div>
                                            <p>4127/ 5B-C Mislane Road, Gibraltar, UK</p>
                                        </div>
                                        <div className="footer-single-contact-info d-flex">
                                            <div className="contact-icon">
                                                <img src={callImg} alt=""/>
                                            </div>
                                            <p>Main: 203-808-8613 <br/> Office: 203-808-8648</p>
                                        </div>
                                        <div className="footer-single-contact-info d-flex">
                                            <div className="contact-icon">
                                                <img src={messageImg} alt=""/>
                                            </div>
                                            <p>office@yourbusiness.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="footer-bottom-area">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-12 h-100">
                                    <div className="footer-bottom-content h-100 d-md-flex justify-content-between align-items-center">
                                        <div className="copyright-text">
                                            <p>
                                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                                            </p>
                                        </div>
                                        <div className="footer-social-info">
                                            <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
    );
}
export default Footer;