import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Card from '../templates/card';
import { container, cardList } from './index.module.scss';
import cards from '../cardsIndex';

const IndexPage = () => {
  // Add cards to cardIndex.tsx file
  return (
    <Layout>
      <SEO title="Home" />
      <section className={container}>
        <div className={cardList}>
          {cards &&
            cards.map(card => {
              return (
                <Card
                  key={card.title}
                  img={card.img}
                  title={card.title}
                  description={card.description}
                  linkList={card.linkList}
                />
              );
            })}
        </div>
      </section>
    </Layout>
  );
};
export default IndexPage;
