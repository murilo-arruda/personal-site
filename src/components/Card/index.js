import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';

const Card = ({ img, title, description, linkList, className }) => {
  return (
    <S.StyledCard key={title} className={className}>
      <S.Thumb src={img.src} alt={img.alt} />
      <S.Title>{title}</S.Title>
      <S.Info>{description}</S.Info>
      <S.ButtonStack>
        {linkList.map(options => {
          return options.gatsbyLink ? (
            <Link to={options.destination} key={options.text}>
              {' '}
              <S.Button>{options.text}</S.Button>
            </Link>
          ) : (
            <a href={options.destination} key={options.text}>
              <S.Button>{options.text}</S.Button>
            </a>
          );
        })}
      </S.ButtonStack>
    </S.StyledCard>
  );
};

export default Card;
