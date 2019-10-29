import React from 'react';
import { Link } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Parece que esta pagína não existe</h1>
    <p>
      Você chegou em um lugar obscuro. melhor voltar para a{' '}
      <Link to="/">Home</Link>
    </p>
  </Layout>
);

export default NotFoundPage;
