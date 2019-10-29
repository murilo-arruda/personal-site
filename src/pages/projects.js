import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import Card from 'components/Card';
import styled from 'styled-components';

const CardList = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
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
  return (
    <Layout>
      <SEO title="Projetos" />
      <div>
        <CardList>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Card
                img={{
                  src: 'https://via.placeholder.com/300x150',
                  alt: node.frontmatter.title,
                }}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                linkList={[
                  {
                    gatsbyLink: true,
                    destination: `/projects/${node.fields.slug}`,
                    text: node.fields.slug,
                  },
                ]}
              />
            );
          })}
        </CardList>
      </div>
    </Layout>
  );
};

export default Projects;
