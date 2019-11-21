import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';

const ProfileCard = ({ avatarSources, siteTitle }) => (
  <S.Profile>
    <S.Pic alt="Murilo Arruda" fluid={avatarSources} />

    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <h4>Desenvolvedor full-stack</h4>
    <S.Description>
      Programador em constante aprendizagem. Aqui vou compartilhar minhas
      experiências e conhecimentos na área.
    </S.Description>
  </S.Profile>
);

export default ProfileCard;
