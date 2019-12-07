import React from 'react';
import * as S from './styled';
import { default as HS } from 'components/HighlightSkill';
import StackList from 'components/StackList';

const AboutBody = () => {
  const getAge = () => {
    const birthday = +new Date('1993-11-11');
    return ~~((Date.now() - birthday) / 31557600000);
  };
  return (
    <S.About>
      <h1>Sobre Mim</h1>
      <p>
        Olá, meu nome é Murilo tenho {getAge()} anos e sou progamador{' '}
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
        pode me encontrar em:{' '}
        <a
          href="https://www.linkedin.com/in/muriloarruda/"
          target="_blank"
          rel="noopener noopener noreferrer"
        >
          Linkedin
        </a>
        ,{' '}
        <a
          href="https://twitter.com/passocabr"
          target="_blank"
          rel="noopener noopener noreferrer"
        >
          Twitter
        </a>{' '}
        (Embora ultimamente não utilize muito),{' '}
        <a
          href="https://github.com/murilo-arruda"
          target="_blank"
          rel="noopener noopener noreferrer"
        >
          Github
        </a>
        .
      </p>

      <p>
        Você também pode ver alguns dos meus projetos recentes na{' '}
        <S.Linkto to="/projects">página de projetos.</S.Linkto>
      </p>

      <StackList />
    </S.About>
  );
};

export default AboutBody;
