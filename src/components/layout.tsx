import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './header';
import './layout.scss';
import { main, sideBar, content } from './layout.module.scss';

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
        <footer>© {new Date().getFullYear()}, Murilo Arruda</footer>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
