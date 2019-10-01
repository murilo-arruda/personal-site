import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Blogs: React.FC = () => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1>Blogs List</h1>
      </div>
    </Layout>
  );
};

export default Blogs;
