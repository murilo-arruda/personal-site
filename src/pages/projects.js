import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import Card from 'components/Card';

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
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
        <h1>Projects List</h1>
        <ul>
          {data.allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Card
                img={{
                  src: 'https://via.placeholder.com/300x150',
                  alt: node.frontmatter.title,
                }}
                title={node.frontmatter.title}
                description={node.frontmatter.title}
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
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
