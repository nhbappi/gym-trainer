import React from 'react';
import { Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/Cafpture.PNG';
import Services from '../Services/Services';
import './Home.css'


const Home = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block  carousel-1 img-fluid"
      src="https://wallpaperaccess.com/full/1535446.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='carousel-text'>Healthy & Fit With Coach</h3>
      <Link className='carousel-button' to ="/contacts">Contact Me</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block carousel-1 img-fluid"
      src="https://webassets-prod.ultimateperformance.com/uploads/2021/06/16163347/Partner-Coach-Banner-3.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='carousel-text'>Reach Your Potential!</h3>
      <Link className='carousel-button' to ="/contacts">Contact Me</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block  carousel-1 img-fluid"
      src="https://www.basic-fit.com/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dwf0cbd84f/Roots/Blog/Blog-Header/1088x612/19-07-Blog-fitness-training-personal-training.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='carousel-text'>Healthy Body Healthy Life</h3>
      <Link className='carousel-button' to ="/contacts">Contact Me</Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<Services></Services>



  <div className="container">
  <div className="row">
    <div className="col mt-5">
    <h4 className='app-title'>Health & Fitness app</h4>
      <h1 className='app-name'>Download Mobile Application</h1>
      <p>Say hello to the best at-home workout guide you will ever find! This program is great if you cannot get to the gym, but still want a kickass workout and nutrition program!</p>
      <button className='btn-1'><i className="fa fa-apple fs-4 fw-bold"></i><span className='ms-3'>DOWNLOAD ON</span> <span className='fs-4'>Apple(IOS)</span></button><br></br>
      <button className='btn-2 mt-3'><i className="fa fa-play fs-4 fw-bold"></i><span className='ms-3'>DOWNLOAD ON</span> <span className='fs-4'>ANDROID</span> </button>
    </div>
    <div className="col">
    <img className='img-part mt-5' src="http://alex-stone.themerex.net/wp-content/uploads/2017/08/apps_image.png" alt="" />
    </div>
  </div>
  </div>


<div className="container mt-5">
  <div className="row">
    <div className="col-lg-6 col-md-6">
    <img className='img-fluid mt-5' src="https://raymondonyango.files.wordpress.com/2011/12/personal-trainer-1.jpg" alt="" />
    </div>
    <div className="col-lg-6 col-md-6 mt-5">
    <h4 className='app-title'>Read My Story</h4>
      <h1 className=''>Download Mobile Application</h1>
      <h4>“I am the creator of a Training Programs, personal coach and a writer. ”</h4>
      <p>Being fit and living healthy is what I know and love. Fitness has always been a part of my life. I grew up in a fit family—my dad ran marathons, we had a home gym, and my parents always had gym memberships.</p>

      <div className='d-flex'>
      <i className="fa fa-facebook mx-4 text-secondary fs-4"></i>
      <i className="fa fa-instagram mx-4 text-secondary fs-4"></i>
      <i className="fa fa-twitter mx-4 text-secondary fs-4"></i>
      <i className="fa fa-pinterest mx-4 text-secondary fs-4"></i>


      </div>
    </div>
  </div>
  </div>



  <div className='mt-5'>
    <img className='img-fluid' src={image} alt="" />
  </div>










</div>
    );
};

export default Home;