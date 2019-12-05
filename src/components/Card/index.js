import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';
import Img from 'gatsby-image';

const Card = ({ img, title, description, link, alt }) => {
  return (
    <Link to={link}>
      <S.StyledCard key={title}>
        <Img fluid={img.childImageSharp.fluid} alt={alt} />

        <S.Info>{description}</S.Info>
      </S.StyledCard>
    </Link>
  );
};

export default Card;
