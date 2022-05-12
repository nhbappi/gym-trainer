import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer mt-5 pb-4 pt-4">
            <div className="container">
                <div className="row">
                    <div className="footer-aboutUs col-12 col-sm-12 col-md-6 col-lg-4">
                        <p className="title">About Me</p>
                        <p>Being fit and living healthy is what I know and love. I believe in training with intensity, eating to fuel your body and having fun while doing it. If you're not enjoying fitness...what's the point?!</p>
                        <div className="address">
                            <p><i className="fas fa-home"></i> Mugdha, Dhaka, Bangladesh</p>
                            <p><i className="fas fa-envelope"></i> alexstone@gmail.com</p>
                            <p><i className="fas fa-phone-alt"></i> +98 558 547 589</p>
                        </div>
                    </div>


                    <div className="footer-nav col-12 col-sm-12 col-md-6 col-lg-4">
                        <p className="title ms-4">Usefull Link</p>
                        <div className="link">
                            <p>Home</p>
                            <p>About Me</p>
                            <p>Ask Me</p>
                            <p>My Stories</p>
                            <p>Services</p>
                            <p>Blogs</p>
                        </div>
                    </div>


                    <div className="footer-socila col-12 col-sm-12 col-md-6 col-lg-4">
                        <p className="title">Join With Me</p>
                        <div>
                            <input type="text" />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;