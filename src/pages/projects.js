import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const projects = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Projetos" />
      <div>
        <CardList>
          {projects.map(({ node }) => {
            return (
              <Card
                img={{
                  src: 'https://via.placeholder.com/300x150',
                  alt: node.frontmatter.title,
                }}
                key={node.frontmatter.title}
                title={node.frontmatter.title}
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
