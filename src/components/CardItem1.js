import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem1(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Card Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info1'>
          <h2 className='cards__item__heading'>{props.heading}</h2>
            <h5 className='cards__item__text'>{props.text}</h5>
            <div className='card-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          LEARN MORE
        </Button>
        </div>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem1;
