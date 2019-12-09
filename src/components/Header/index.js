import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from 'components/Navbar';
import ProfileCard from 'components/ProfileCard';
import SocialList from 'components/SocialList';
import * as S from './styled';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      profilePic: file(relativePath: { eq: "profile_beta.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const source = data.profilePic.childImageSharp.fluid;

  return (
    <S.Container>
      <S.HeaderItems>
        <ProfileCard avatarSource={source} siteTitle={siteTitle} />
        <Navbar />
        <SocialList hideInMobile={true} />
      </S.HeaderItems>
    </S.Container>
  );
};
Header.defaultProps = {
  siteTitle: 'Murilo Arruda',
};

export default Header;
