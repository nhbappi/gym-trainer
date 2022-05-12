import React from 'react';
import './ServiceCheckOut.css';
import image from '../../images/card_img.png';
import { Link } from 'react-router-dom';

const ServiceCheckOut = () => {
    return (
        <div className='checkout-part'>
            <div className="container-part">

<form action="">

    <div className="row">

        <div className="col">

            <h3 className="title">Billing address</h3>

            <div className="inputBox">
                <span>Full Name :</span>
                <input type="text" placeholder="justin biver"/>
            </div>
            <div className="inputBox">
                <span>email :</span>
                <input type="email" placeholder="example@example.com"/>
            </div>
            <div className="inputBox">
                <span>address :</span>
                <input type="text" placeholder="room - street - locality"/>
            </div>
            <div className="inputBox">
                <span>city :</span>
                <input type="text" placeholder="dhaka"/>
            </div>

            <div className="flex">
                <div className="inputBox">
                    <span>state :</span>
                    <input type="text" placeholder="bangladesh"/>
                </div>
                <div className="inputBox">
                    <span>zip code :</span>
                    <input type="text" placeholder="123 456"/>
                </div>
            </div>

        </div>

        <div className="col">

            <h3 className="title">payment</h3>

            <div className="inputBox">
                <span>cards accepted :</span>
                <img src={image} alt=""/>
            </div>
            <div className="inputBox">
                <span>name on card :</span>
                <input type="text" placeholder="mr. justin biver"/>
            </div>
            <div className="inputBox">
                <span>credit card number :</span>
                <input type="number" placeholder="1111-2222-3333-4444"/>
            </div>
            <div className="inputBox">
                <span>exp month :</span>
                <input type="text" placeholder="january"/>
            </div>

            <div className="flex">
                <div className="inputBox">
                    <span>exp year :</span>
                    <input type="number" placeholder="2022"/>
                </div>
                <div className="inputBox">
                    <span>CVV :</span>
                    <input type="text" placeholder="1234"/>
                </div>
            </div>

        </div>

    </div>
    <div className='d-flex'>
    <button type="button" className="btn btn-success mx-auto">proceed to checkout</button>
    </div>

</form>
</div> 
<div className="text-center">
            <Link to="/services"><i className="fas fa-long-arrow-alt-left me-1"></i>Go Back</Link>
            </div>   
        </div>
    );
};

export default ServiceCheckOut;