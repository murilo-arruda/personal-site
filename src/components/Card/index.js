import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';

const Card = ({ img, title, description, link }) => {
  return (
    <Link to={link}>
      <S.StyledCard key={title}>
        <S.Thumb src={img.src} alt={img.alt} />
        <S.Title>{title}</S.Title>
        <S.Info>{description}</S.Info>
      </S.StyledCard>
    </Link>
  );
};

export default Card;
