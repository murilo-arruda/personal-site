import React from 'react';
import * as S from './styled';
import { Link } from 'gatsby';
import { default as HS } from 'components/HighlightSkill';
import styled from 'styled-components';
import * as V from 'styles/variables';

const Line = styled.strong`
  text-decoration: underline;
  text-decoration-color: ${V.Color.pinkRedNeon};
`;
const AboutBody = () => {
  return (
    <S.About>
      <h1>Sobre Mim</h1>
      <p>
        Olá, meu nome é Murilo tenho 25 anos e sou progamador{' '}
        <HS skillName="FULLSTACK">Full Stack</HS>. atualmente focado em
        desenvolvimento Web. Estou prestes a me Formar na FAETERJ - Petrópolis
        em <HS skillName="TI">Tecnologia da Informação e Comunicação </HS> e
        dedico grande parte do meu tempo estudando e aprendendo novas
        tecnologias.
      </p>
      <p>
        Na Web tenho um bom dominio em <HS>Javascript</HS> e venho utilizando{' '}
        <HS>React</HS> como minha escolha de blibioteca na criação de sites
        dinâmicos e modernos. Também tenho conhecimento em: <HS>Node</HS>,{' '}
        <HS>express</HS>, <HS>Redux</HS>, <HS>Vue</HS>, <HS>Gatsby</HS>,{' '}
        <HS>SASS</HS>, <HS>AWS</HS>, <HS>Netlify</HS>,{' '}
        <HS skillName="DIGITALOCEAN">Digital Ocean</HS>, <HS>Git</HS>,{' '}
        <HS>Photoshop</HS>, <HS>Ilustrator</HS>,
        <HS skillName="ADOBEXD"> Adobe XD</HS> e várias outras tecnologias
        relacionadas ao
        <HS skillName="WEBDEV"> desenvolvimento WEB</HS>.
      </p>
      <p>
        <HS>Python</HS> é outra linguagem que tenho um grande carinho e que
        sempre estou explorando e me divertindo com esta linguagem, especial na
        área de Ciência de Dados. Embora Python seja minha linguagem favorita,
        também tenho conhecimento em <HS>C#</HS> e outra linguagens mais
        orientadas a objeto.
      </p>
      <p>
        Sempre estou aumentando minha caixa de ferramenta: <HS>Docker</HS>,{' '}
        <HS skillName="WEBSERVICES">serviços web </HS>, <HS>TDD</HS>,{' '}
        <HS>Data Science</HS> são algumas áreas/tecnologias que venho
        aprimorando meu conhecimento.
      </p>

      <p>
        Estou sempre buscando melhorar meus conhecimentos e sempre disposto a
        ajudar os outros. Caso você queria entrar em contato comigo para
        conversar sobre programação ou conhecer um pouco mais sobre mim, você
        pode me encontrar em: <HS>Linkedin</HS>, <HS>Twitter</HS> (Embora
        ultimamente não utilize muito), <HS>Github</HS>.
      </p>

      <p>
        Você também pode ver alguns dos meus projetos recentes na{' '}
        <Line>
          <Link to="/projects">página de projetos.</Link>
        </Line>
      </p>
    </S.About>
  );
};

export default AboutBody;
