import React from 'react';
import { Button } from 'reactstrap';



const BookForm = () => {
    return (
        <div className="book-form">
            <form>
                <label>Please select your RTO</label>
                <br />
                <input type="text"></input>
                <div className="type_service">
                    <label htmlFor="type_of_service">Types of Service</label>
                    <br />
                    <input type="radio" name="service_selected"></input><span>Driving related service</span>
                    <input type="radio" name="service_selected"></input><span>Vehicle related service</span>
                </div>
                <br />
                <label htmlFor="service_selected">Select Driver related service</label>
                <br />
                <input list="services"></input>
                <datalist id="services">
                    <option>Edge</option>
                    <option>Firefox</option>
                    <option>Chrome</option>
                </datalist>
                <br/>
                <Button type="submit" className="book-btn">Proceed to next steps</Button>
            </form>
        </div>
    )
}

export default BookForm;