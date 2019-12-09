import React, { Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import GlobalStyles from 'styles/global';
import * as S from './styled';
import SocialList from 'components/SocialList';
const Layout = ({ children }) => {
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
    <Fragment>
      <GlobalStyles />
      <S.Main>
        <Header siteTitle={data.site.siteMetadata.title} />
        <S.Content>
          <section>{children}</section>
          <S.Footer>
            <p> © {new Date().getFullYear()} - Murilo Arruda </p>
            <SocialList hideInMobile={false} />
          </S.Footer>
        </S.Content>
      </S.Main>
    </Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
