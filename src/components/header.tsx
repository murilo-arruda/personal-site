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
} from './header.module.scss';

interface Props {
  siteTitle?: string;
  data: any;
}

const Header: React.FC<Props> = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile_beta.png" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header className={container}>
      <div>
        <div className={profileCard}>
          <Img
            className={profilePic}
            alt="foto de perfil"
            fixed={data.file.childImageSharp.fixed}
          />
          <h1>
            <Link to="/">{siteTitle}</Link>
          </h1>
          <p>Desenvolvedor full-stack</p>
          <p className={description}>
            Programador em constante aprendizagem. Aqui vou compartilhar minhas
            experiências e conhecimentos na área.
          </p>
        </div>
        <ul>
          <li>
            <Link to="/blog">
              {' '}
              <BookOpen color="#ff2079" size={18} /> Blog
            </Link>
          </li>
          <li>
            <Link to="/about">
              <User color="#ff2079" size={18} /> Sobre Mim
            </Link>
          </li>
          <li>
            <Link to="/projetos">
              <Box color="#ff2079" size={18} /> Projetos
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <MessageCircle color="#ff2079" size={18} /> Contato
            </Link>
          </li>
        </ul>
        <div className={socialList}>
          <a href="https://www.linkedin.com/in/muriloarruda/" target="_blank">
            <Linkedin />
          </a>
          <a href="https://twitter.com/passocabr" target="_blank">
            <Twitter />
          </a>
          <a href="https://github.com/murilo-arruda" target="_blank">
            <GitHub />
          </a>
        </div>
      </div>
    </header>
  );
};
Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
