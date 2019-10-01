import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.scss';
import { main, sideBar, content, footerFixed } from './layout.module.scss';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={main}>
      <Header className={sideBar} siteTitle={data.site.siteMetadata.title} />
      <div className={content}>
        <main>{children}</main>
        <footer className={footerFixed}>
          © {new Date().getFullYear()}, built by: Murilo Arruda using Gatsby
        </footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
