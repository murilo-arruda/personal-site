import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import * as S from './styledProject';

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
      <S.MarkdownBody dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
};

export default Project;
