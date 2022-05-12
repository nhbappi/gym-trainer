import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h1>Q: Difference between authorization and authentication.</h1>
            <p><span className='fs-4 fw-bold'> Authentication:</span> Authentication verifies the user. It works on password, pins, biometric and other information that is provided by the user. Authentication is the good identity and access management process. It is visible and user can change it anytime.<br>
            </br>
            <br></br>
           <span className='fs-4 fw-bold'>  Authorization:</span> Authorization refers resources a user can access. It works on setting that are maintaining by the organizations. Authorization always takes place after authentication. User can't change it and it is not visible.
            
            </p>

            <h1>Q: Why are you using firebase? What other options do you have to implement authentication?</h1>
             <p>Firebase Analytics gives you undeniable insight into user behavior. You can use this knowledge to make informed decisions about how to market your app better and to reach out to the audiences that you want to target.Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints. </p>
       
             <h1>Q: What other services does firebase provide other than authentication?</h1>
             <p>There are many services which Firebase provides, Most useful of them are: Cloud FireStore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging and etc </p>


        </div>
    );
};

export default Blogs;