import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import Card from 'components/Card';
import cards from '../cardsIndex';
import styled from 'styled-components';
import media from 'styled-media-query';
import { graphql } from 'gatsby';

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

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <CardList>
          {cards &&
            cards.map(card => {
              console.log(props.data[card.img.src]);
              return (
                <Card
                  key={card.title}
                  img={props.data[card.img.src]}
                  alt={card.img.alt}
                  description={card.description}
                  link={card.link}
                  gatsbyTemp={true}
                />
              );
            })}
        </CardList>
      </Container>
    </Layout>
  );
};
export default IndexPage;

export const pageQuery = graphql`
  query {
    sobre: file(relativePath: { eq: "sobre.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blog: file(relativePath: { eq: "blog.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    projetos: file(relativePath: { eq: "projetos.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
