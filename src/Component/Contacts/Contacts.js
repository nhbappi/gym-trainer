import React from 'react';
import './Contacts.css'

const Contacts = () => {
    return (
  
      
       <div className='contact-form'>
        <form className="forms">
        <h2 className='contact-us'>CONTACT ME</h2>
        <p className='paragraph' type="Name:"><input className='input-part' placeholder="Write your name here.."></input></p>
        <p className='paragraph' type="Email:"><input className='input-part' placeholder="Let us know how to contact you back.."></input></p>
        <p className='paragraph' type="Message:"><input className='input-part' placeholder="What would you like to tell us.."></input></p>
        <button className='btn-parts'>Send Message</button>
        
      </form>
      <div className='main-div  mx-auto'>
         <span className="fa fa-phone span-part"></span>001 1023 567
         <span className="fa fa-envelope-o span-part"></span> contact@company.com
       </div>
         </div>
         
    )
};

export default Contacts;