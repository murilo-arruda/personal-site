import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
      fields {
        slug
      }
    }
  }
`;

const Project = ({ data }) => {
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export default Project;
