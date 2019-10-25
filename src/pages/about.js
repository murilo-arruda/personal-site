import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/seo';
import AboutBody from 'components/AboutBody';
import StackList from 'components/StackList';
import SkillsState from 'context/skills/SkillsState';
const About = () => {
  return (
    <Layout>
      <SEO title="Sobre Mim" />
      <SkillsState>
        <AboutBody />
        <StackList />
      </SkillsState>
    </Layout>
  );
};

export default About;
