import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import AboutBody from 'components/AboutBody';
import SkillsState from 'context/skills/SkillsState';
const About = () => {
  return (
    <Layout>
      <SEO title="Sobre Mim" />
      <SkillsState>
        <AboutBody />
      </SkillsState>
    </Layout>
  );
};

export default About;
