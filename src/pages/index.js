import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import CardIndex from 'components/CardIndex';
import cards from '../cardsIndex';
import styled from 'styled-components';
import media from 'styled-media-query';

const Container = styled.section`
  flex-grow: 100;
`;

const CardList = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  ${media.greaterThan('1171px')`
  margin-top: 20%;
  `}
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
                <CardIndex
                  key={card.title}
                  img={card.img}
                  title={card.title}
                  description={card.description}
                  link={card.link}
                />
              );
            })}
        </CardList>
      </Container>
    </Layout>
  );
};
export default IndexPage;
