import React from 'react';
import { Link } from 'gatsby';
import * as S from './styled';
const ProfileCard = ({ avatarSource, siteTitle }) => (
  <S.Profile>
    <S.Pic alt="Murilo Arruda" fluid={avatarSource} />

    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </S.Profile>
);

export default ProfileCard;
