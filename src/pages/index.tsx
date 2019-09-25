import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../templates/card';
import { container, cardList } from './index.module.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className={container}>
      <div className={cardList}>
        <Card
          img={{
            src: 'https://via.placeholder.com/300x150',
            alt: 'placeholder',
          }}
          title="Placeholder Card"
          description="descrição do card e outras coisas"
          linkList={[
            {
              gatsbyLink: false,
              destination: 'https://via.placeholder.com/300x150',
              text: '300x150',
            },
          ]}
        />
      </div>
    </section>
  </Layout>
);

export default IndexPage;
