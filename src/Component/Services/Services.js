import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [ services ] = useServices();

    return (
        <div id="services" className="container mb-5">
            <h4 className="text-center mt-5 text-service">My Training Service</h4>
            <h1 className="text-center bottom_underline">Personal Training Services</h1>
            <Row xs={1} md={2} lg={3} className="g-4 mt-3">
                {
                    services.map(user => <Service key={user.id} user={user}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;