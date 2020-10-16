import React from 'react';
import {
    Card, CardBody,
    CardTitle,Button
} from 'reactstrap';
const ViewServices = ({ data }) => {
    return (
        <div>
            <Card className="card-disp">
                <CardTitle className="card-title">{data.head}</CardTitle>
                <CardBody>
                    <p className="card-body">{data.info}</p>
                    <div className="card-flex">
                    <p className="price"><span>&#8377; </span>{data.price}<span> /-</span></p>
                    <div className="flex-btn"><Button className="card-btn">Get Started</Button></div>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default ViewServices;