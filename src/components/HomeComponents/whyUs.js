import React from 'react';
import { TiTickOutline } from 'react-icons/ti';
import { FiThumbsUp } from 'react-icons/fi';
import { FcClock,FcElectricity } from 'react-icons/fc'

const WhyUs = () =>{
    return(
        <div className="why-us">
            <p className="head">Why myVahan</p>
            <div className="whyus">
                <div className="flex-item">
                <TiTickOutline className="logo" size="100px"></TiTickOutline>
                <p>Simplified RTO Services</p>
                </div>
                <div className="flex-item">
                <FiThumbsUp className="logo" size="100px"></FiThumbsUp>
                <p>Reliable RTO Representative</p>
                </div>
                <div className="flex-item">
                <FcClock className="logo" size="100px"></FcClock>
                <p>On Time Every Time</p>
                </div>
                <div className="flex-item">
                <FcElectricity className="logo" size="100px"></FcElectricity>
                <p>Get your RTO Work Done Fast</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;