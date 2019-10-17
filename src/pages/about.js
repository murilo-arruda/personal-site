import React from 'react';
import Layout from 'components/Layout';
import SEO from 'components/seo';

const About = () => {
  return (
    <Layout>
      <SEO title="Sobre Mim" />
      <div>
        <h1>Sobre Mim</h1>
        <p>
          Olá, meu nome é Murilo tenho 25 anos e sou um progamador atualmente
          focado em desenvolvimento Web. Estou prestes a me Formar na FAETERJ -
          Petrópolis em Tecnologia da Informação e Comunicação e dedico grande
          parte do meu tempo estudando e aprendendo novas tecnologias.
        </p>
        <p>
          Na Web tenho um bom dominio em Javascript e venho utilizando React
          como minha escolha de blibioteca na criação de sites dinâmicos e
          modernos. Também tenho conhecimento em: Node, express, Redux, Vue,
          Gatsby, SASS, AWS, Netlify, Digital Ocean, Git e várias outras
          tecnologias relacionadas ao desenvolvimento WEB.
        </p>
        <p>
          Python é outra linguagem que tenho um grande carinho e sempre estou
          mexendo e me divertindo com esta linguagem. Embora Python seja minha
          linguagem favorita, também tenho conhecimento em C#
        </p>
        <p>
          Sempre estou aumentando minha caixa de ferramenta: Docker, serviços
          web, TDD, Data Science e etc.
        </p>

        <p>
          Caso você queria entrar em contato comigo para conversar sobre
          qualquer coisa, você pode me encontrar em: Linkedin, Twitter (Embora
          ultimamente não utilize muito), Github.
        </p>
      </div>
    </Layout>
  );
};

export default About;
