import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import AboutBody from 'components/AboutBody';

const About = () => {
  return (
    <Layout>
      <SEO title="Sobre Mim" />
      <AboutBody />
    </Layout>
  );
};

export default About;
