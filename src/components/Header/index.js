import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from 'components/Navbar';
import ProfileCard from 'components/ProfileCard';
import SocialList from 'components/SocialList';
import * as S from './styled';

const Header = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "profile_beta.png" }) {
        childImageSharp {
          fluid(maxWidth: 48, maxHeight: 48, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      desktopImage: file(relativePath: { eq: "profile_beta.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `);
  const sources = [
    data.mobileImage.childImageSharp.fluid,
    {
      ...data.desktopImage.childImageSharp.fluid,
      media: `(min-width: 768px)`,
    },
  ];
  // This div is only used on mobile. Need to find a better solution
  return (
    <S.Container>
      <div>
        <ProfileCard avatarSources={sources} siteTitle={siteTitle} />
        <Navbar />
        <SocialList />
      </div>
    </S.Container>
  );
};
Header.defaultProps = {
  siteTitle: 'Murilo Arruda',
};

export default Header;
