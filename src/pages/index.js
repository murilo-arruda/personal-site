import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import Card from 'templates/Card';
import cards from '../cardsIndex';
import styled from 'styled-components';

const Container = styled.section`
  flex-grow: 100;
`;

const CardList = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <CardList>
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
        </CardList>
      </Container>
    </Layout>
  );
};
export default IndexPage;
