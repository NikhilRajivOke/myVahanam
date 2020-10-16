import React,{useState} from 'react';
import ViewServices from './viewServices'

const Services = () => {
    
    const [data,setData] =  useState( [{ head: 'Learner license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 500 },
    { head: 'Permenant license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 800 },
    { head: 'Driving license renewal', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 900 },
    { head: 'International driving permit', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 1200 },
    { head: 'Duplicate driving license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 700 },
    { head: 'Issue NOC of driving license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 800 }]);
    
    const getData = (opted) => {
        if (opted === 'Driving') {
            setData([{ head: 'Learner license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 500 },
            { head: 'Permenant license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 800 },
            { head: 'Driving license renewal', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 900 },
            { head: 'International driving permit', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 1200 },
            { head: 'Duplicate driving license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 700 },
            { head: 'Issue NOC of driving license', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 800 }]);
        }
        if (opted === 'Vehicle') {
            setData([{ head: 'Transfer of vehicle ownership', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 500 },
            { head: 'Hypothecation cancelation', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 800 },
            { head: 'Issue NOC of vehicle', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 900 },
            { head: 'Submit NOC of vehicle', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 1200 },
            { head: 'Renewal of Registration certificate', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 700 },
            { head: 'Duplicate Registration certificate', info: 'Startup India Scheme recognition is a very important license for a Startup to get eligible for 3 years Income Tax exemption, get easy funding and easy loan processing.', price: 800 }]);
        }
        
        console.log("Data changed !!");
        
    }
    const viewData = (data) => {
        // console.log('function called for rendering service !! ')
        const newService = data.map((ser) => {
            //console.log(ser);
            return (
                <div key={ser.head} className="service-card">
                    <ViewServices data={ser}></ViewServices>
                </div>
            )
        })
        return newService;
    }

    return (
        <div className="services">
            <p className="head">Our Services</p>
            <button value="Driving" className="select" autoFocus onClick={e => getData(e.target.value)}>Driving</button>
            <button value="Vehicle" className="select" onClick={e => getData(e.target.value)}>Vehicle</button>
            
                <div className="service-display">
                    {viewData(data)}
                </div>
            
        </div>
    )

}

export default Services; 