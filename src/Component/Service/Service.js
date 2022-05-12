import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Service.css'

const Service = ({ user }) => {
    const {cost, image, description, title, id } = user;

    return (
        <div>
            <Col>
                <Card className="service">
                    <Card.Img className="service-img img-fluid mx-auto" variant="top" src={image} />
                    <Card.Body className="card_body">
                        <Card.Title className="">{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Text className="fs-4">
                            {cost}
                        </Card.Text>
                        <Link className="link-button" to={`/Services/${id}`}>Enroll Now <i className="fas fa-long-arrow-alt-right"></i></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;