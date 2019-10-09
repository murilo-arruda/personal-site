import React from 'react';
import { Link } from 'gatsby';
import {
  card,
  cardImg,
  cardTitle,
  cardInfo,
  cardButton,
  buttonStack,
} from './card.module.scss';

const Card = ({ img, title, description, linkList }) => {
  return (
    <div className={card} key={title}>
      <img className={cardImg} src={img.src} alt={img.alt} />
      <h2 className={cardTitle}>{title}</h2>
      <p className={cardInfo}>{description}</p>
      <div className={buttonStack}>
        {linkList.map(options => {
          return options.gatsbyLink ? (
            <Link to={options.destination} key={options.text}>
              {' '}
              <button className={cardButton}>{options.text}</button>
            </Link>
          ) : (
            <a href={options.destination} key={options.text}>
              <button className={cardButton}>{options.text}</button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
