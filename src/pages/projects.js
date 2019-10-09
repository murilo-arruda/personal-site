import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';

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
              <Link to={`/projects/${node.fields.slug}`} key={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            );
          })}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;
