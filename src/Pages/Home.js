import React from 'react';
import BookForm from '../components/Forms/BookForm';
import hero from '../assets/hero-ill.png';
import Testimonials from '../components/HomeComponents/Testimonials';
import Services from '../components/HomeComponents/Services'
import WhyUs from '../components/HomeComponents/whyUs';
export const Home = () => {
    return (
        <div>
            <div className="background">
                <div className="Home-hero">
                    <div className="left-hero">
                        <p className="hero-head">Now No More waiting in those big lines </p>
                        <p className="hero-sub">Tell us what you need and consider its done.</p>
                        <BookForm></BookForm>
                    </div>
                    <div className="right-hero">
                        <img src={hero} alt="Hero-illus"></img>
                    </div>
                </div>
            </div>
            <Services></Services>
            <Testimonials></Testimonials>
            <WhyUs></WhyUs>
        </div>
    )
}

