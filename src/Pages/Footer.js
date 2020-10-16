import React from 'react';
import logo from '../assets/vahan-logo.png'
import { AiOutlineIdcard, AiOutlineCar, AiOutlineClockCircle } from 'react-icons/ai';
import { RiMailOpenLine } from 'react-icons/ri';
import { MdCall } from 'react-icons/md';

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="logo-section item">
                    <img src={logo} alt="logo" />
                    <p>Reliable, Timely and Overall RTO Related Work Right From Your Doorstep, So that You Can Spend Your Precious Time More Usefully.</p>
                </div>
                <div className="navigation-section item">
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>How does it work</li>
                        <li>RTO Forms</li>
                        <li>Blogs</li>
                        <li>FAQS</li>
                        <li>Disclaimer</li>
                    </ul>
                </div>
                <div className="services-section item">
                    <p className="service">SERVICES</p>
                    <div className="driving">
                        <AiOutlineIdcard size="75px" className="sec"></AiOutlineIdcard>
                        <p className="sec">Driving Related Services</p>
                    </div>
                    <hr></hr>
                    <div className="vehicle">
                        <AiOutlineCar size="75px" className="sec"></AiOutlineCar>
                        <p className="sec">Vehicle Related Services</p>
                    </div>
                </div>
                <div className="contact item">
                    <div className="contact-board">
                        <p className="call">Call us on</p>
                        <p className="num">+91 8007320634</p>
                    </div>
                    <div className="contact-section">
                        <div className="type">
                            <RiMailOpenLine size="30px" color="white" className="sec"></RiMailOpenLine>
                            <p className="sec">help@myvahan.com</p>
                        </div>
                        <div className="type">
                            <MdCall size="30px" color="white" className="sec"></MdCall>
                            <p className="sec"> +91 8007320634 </p>
                        </div>
                        <div className="type">
                            <AiOutlineClockCircle size="30px" color="white" className="sec"></AiOutlineClockCircle>
                            <p className="sec">Hours : Mon-Sat 10 am - 7 pm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &#169; 2020 | myVahan.in | All Rights Reserved</p>
            </div>
        </>
    )
}
export default Footer;