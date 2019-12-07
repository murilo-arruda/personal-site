import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import Card from 'components/Card';
import styled from 'styled-components';
import media from 'styled-media-query';

const CardList = styled.div`
  padding: 0;
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
  ${media.lessThan('large')`

  justify-content: space-around;
  display:flex;
  flex-wrap: wrap;
  `}
  ${media.lessThan('1290px')`
  grid-template-columns: repeat(2, 1fr);
  `};
  ${media.greaterThan('1171px')`
    margin-top: 5%;
  `}
  ${media.greaterThan('1288px')`
  margin-top: 15%;
  `}
`;

const Projects = props => {
  const projects = props.data.blog.edges;

  return (
    <Layout>
      <SEO title="Projetos" />
      <div>
        <CardList>
          {projects.map(({ node }) => {
            return (
              <Card
                img={props.data[node.frontmatter.img]}
                alt={node.frontmatter.title}
                key={node.frontmatter.title}
                description={node.frontmatter.description}
                link={`/projects/${node.fields.slug}`}
              />
            );
          })}
        </CardList>
      </div>
    </Layout>
  );
};

export default Projects;

export const pageQuery = graphql`
  query {
    blog: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            description
            img
          }
          fields {
            slug
          }
        }
      }
    }
    logger: file(relativePath: { eq: "logger.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    keeper: file(relativePath: { eq: "keeper.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    github: file(relativePath: { eq: "github.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    list: file(relativePath: { eq: "list.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    snake: file(relativePath: { eq: "snake.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
