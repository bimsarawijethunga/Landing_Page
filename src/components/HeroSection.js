import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/cover.png'className = "hero" />
      <div className= 'textbox'>
      <h1 className= 'textboxh1'>We Crush Your <br/>Competitors, Goals, And<br/>Sales Records - Without<br/>The B.S.</h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET FREE CONSULTATION
        </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
