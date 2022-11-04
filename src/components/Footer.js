import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
            <Link to='/' className='footer-logo'>
            <img src="/images/logo.png" alt="image" width="15%" height="70%"/>
            <span>&nbsp;&nbsp;</span>
              <h4>AT DIGITAL</h4>
            </Link><br/>
            <p className= 'footerp'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</p>
          </div>
          <div class='footer-link-items'>
          <span>&nbsp;&nbsp;</span>
          </div>
          <div class='footer-link-items'>
            <h2>Our Technologies</h2>
            <Link to='/'>ReactJS</Link>
            <Link to='/'>Gatsby</Link>
            <Link to='/'>NextJS</Link>
            <Link to='/'>NodeJS</Link>
            <Link to='/'>GraphQL</Link>
            <Link to='/'>Laravel</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Our Services</h2>
            <Link to='/'>Social Media Marketing</Link>
            <Link to='/'>Web & Mobile App Development</Link>
            <Link to='/'>Data & Analytics</Link>
            <Link to='/'>Google Marketing Solutions</Link>
            <Link to='/'>Search Engine Optimization</Link>
          </div>
        </div>
      </div>
      <section className='footer-license'>
      <hr
        style={{
          background: 'white',
          height: '1px',
          width: '200%'
        }}
      /><br/>
        <p className='footer-license-text'>
        <Link to='/'>Privacy Policy</Link>
         | 
        <Link to='/'>Terms & Conditions</Link>
        </p>
        </section>
    </div>
  );
}

export default Footer;
