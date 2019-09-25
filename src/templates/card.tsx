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

interface linkOptions {
  gatsbyLink: boolean;
  destination: string;
  text: string;
}
interface cardProps {
  img: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  linkList: Array<linkOptions>;
}

const Card = ({ img, title, description, linkList }: cardProps) => {
  return (
    <div className={card}>
      <img className={cardImg} src={img.src} alt={img.alt} />
      <h2 className={cardTitle}>{title}</h2>
      <p className={cardInfo}>{description}</p>
      <div className={buttonStack}>
        {linkList.map(options => {
          return options.gatsbyLink ? (
            <Link to={options.destination}>
              {' '}
              <button className={cardButton}>{options.text}</button>
            </Link>
          ) : (
            <a href={options.destination}>
              <button className={cardButton}>{options.text}</button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
