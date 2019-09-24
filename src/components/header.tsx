import { Link, graphql } from 'gatsby';
import React from 'react';
import { container } from './header.module.scss';
import Img from 'gatsby-image';

interface Props {
  siteTitle?: string;
  data: any;
}
export const query = graphql`
  query {
    file(relativePath: { eq: "profile_beta.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const Header: React.FC<Props> = ({ data }) => {
  const siteTitle = 'Murilo';
  console.log('data', data);
  return (
    <header className={container}>
      <div>
        <Img fluid={data.file.childImageSharp.fluid} />
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
        <p>Desenvolvedor full-stack</p>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">Sobre Mim</Link>
          </li>
          <li>
            <Link to="/projetos">Projetos</Link>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
