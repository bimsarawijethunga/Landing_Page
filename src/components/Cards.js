import React from 'react';
import './Cards.css';
import CardItem1 from './CardItem1';
import CardItem2 from './CardItem2';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem1
              src='images/card1.png'
              heading= 'Web & Mobile App Development'
              text='Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem2
              src='images/card2.png'
              heading= 'Digital Strategy Consulting'
              text='Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
