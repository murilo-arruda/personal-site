import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

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

type propsData = {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
      };
      fields: {
        slug: string;
      };
    };
  };
};
const Project = ({ data }: propsData) => {
  const html = data.markdownRemark.html;
  return (
    <Layout>
      <SEO title={data.markdownRemark.fields.slug} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export default Project;
