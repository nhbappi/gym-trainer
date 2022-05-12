import React from 'react';
import image from '../../images/jjjjjjgjgfjfgj.jpg';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='my-self'>
            <img className='my-photo d-flex mx-auto mt-5' src={image} alt="" />
            <div>
                <h1 className='text-center mt-5'>About Myself</h1>
                <p className='container fs-5'>First of all, I would like to thank you for giving me an opportunity to introduce myself. My name is Nazmul, I am from Dhaka. I am pursuing my undergraduate graduation in Computer Science & Engineering from National University.
                <br></br>
                My Strength takes Initiative to work independently, Good leadership skills, Adaptable to any kind of situation in an estranged group & Helping tendencies.My Long term goal is to become a more responsible and knowledgeable personality and in a respectable position in my company.

                </p>

            </div>
        </div>
      
    )};

export default AboutMe;