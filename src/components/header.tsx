import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
  Linkedin,
  Twitter,
  GitHub,
  MessageCircle,
  User,
  BookOpen,
  Box,
} from 'react-feather';
import Img from 'gatsby-image';

import {
  container,
  profilePic,
  profileCard,
  description,
  socialList,
  nav,
} from './header.module.scss';

interface Props {
  siteTitle: string;
  className: string;
  // data: { site: { siteMetadata: { title: string } } };
}
const activeStyles = {
  color: 'grey',
};
const Header: React.FC<Props> = ({ siteTitle }) => {
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

  return (
    <header className={container}>
      <div>
        <div className={profileCard}>
          <Img className={profilePic} alt="foto de perfil" fluid={sources} />
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <h3>Desenvolvedor full-stack</h3>
          <p className={description}>
            Programador em constante aprendizagem. Aqui vou compartilhar minhas
            experiências e conhecimentos na área.
          </p>
        </div>
        <ul className={nav}>
          <li>
            <Link to="/about" activeStyle={activeStyles}>
              <User color="#ff2079" size={18} /> Sobre
            </Link>
          </li>
          <li>
            <Link to="/blog" activeStyle={activeStyles}>
              {' '}
              <BookOpen color="#ff2079" size={18} /> Blog
            </Link>
          </li>

          <li>
            <Link to="/projects" activeStyle={activeStyles}>
              <Box color="#ff2079" size={18} /> Projects
            </Link>
          </li>
        </ul>
        <div className={socialList}>
          <a
            href="https://www.linkedin.com/in/muriloarruda/"
            target="_blank"
            rel="noopener"
          >
            <Linkedin />
          </a>
          <a
            href="https://twitter.com/passocabr"
            target="_blank"
            rel="noopener"
          >
            <Twitter />
          </a>
          <a
            href="https://github.com/murilo-arruda"
            target="_blank"
            rel="noopener"
          >
            <GitHub />
          </a>
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  siteTitle: '',
};

export default Header;
