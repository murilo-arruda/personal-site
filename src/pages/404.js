import React from 'react';
import { Link } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import * as S from 'templates/styledProject';
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <S.MarkdownBody>
      <h1>404: Página não encontrada</h1>
      <p>
        Você chegou em um lugar obscuro. melhor voltar para a{' '}
        <Link to="/">página incial</Link>
      </p>
    </S.MarkdownBody>
  </Layout>
);

export default NotFoundPage;
