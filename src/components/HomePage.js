import React from 'react'
import './HomePage.css'
import Logo from '../assets/logo.jpeg'
import {Link} from 'react-router-dom';
import Main from './Main';






function HomePage() {

  return (
    
    <div>
      <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>
            Welcome to  <br /> Care Giver Official Website
          </h1>
          <p className="hero-text">
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Smooth Care web Online Health management to monitor their health status, and
            manage day to day health acitivies.
          </p>
           <span className="group">
            <Link to='/userForm'><button className='button' variant="contained">Register Here</button></Link> 
            
          </span>
        </article>
        <article className="hero-images">
          <img src={Logo} alt="logo" className="phone-img" />
        </article>
      </div>
      </section>
      <div className='main'>
    <Main />
      </div>
    </div>
  )
}

export default HomePage