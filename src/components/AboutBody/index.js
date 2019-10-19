import React from 'react';
import * as S from './styled';
const AboutBody = () => {
  return (
    <S.About>
      <h1>Sobre Mim</h1>
      <p>
        Olá, meu nome é Murilo tenho 25 anos e sou progamador{' '}
        <S.Line>Full Stack</S.Line>. atualmente focado em desenvolvimento Web.
        Estou prestes a me Formar na FAETERJ - Petrópolis em{' '}
        <S.Line>Tecnologia da Informação e Comunicação </S.Line> e dedico grande
        parte do meu tempo estudando e aprendendo novas tecnologias.
      </p>
      <p>
        Na Web tenho um bom dominio em <S.Line>Javascript</S.Line> e venho
        utilizando <S.Line>React</S.Line> como minha escolha de blibioteca na
        criação de sites dinâmicos e modernos. Também tenho conhecimento em:{' '}
        <S.Line>Node</S.Line>, <S.Line>express</S.Line>, <S.Line>Redux</S.Line>,{' '}
        <S.Line>Vue</S.Line>, <S.Line>Gatsby</S.Line>, <S.Line>SASS</S.Line>,{' '}
        <S.Line>AWS</S.Line>, <S.Line>Netlify</S.Line>,{' '}
        <S.Line>Digital Ocean</S.Line>, <S.Line>Git</S.Line> e várias outras
        tecnologias relacionadas ao desenvolvimento WEB.
      </p>
      <p>
        <S.Line>Python</S.Line> é outra linguagem que tenho um grande carinho e
        que sempre estou explorando e me divertindo com esta linguagem, especial
        na área de Ciência de Dados. Embora Python seja minha linguagem
        favorita, também tenho conhecimento em <S.Line>C#</S.Line> e outra
        linguagens mais orientadas a objeto.
      </p>
      <p>
        Sempre estou aumentando minha caixa de ferramenta:{' '}
        <S.Line>Docker</S.Line>, <S.Line>serviços web </S.Line>,{' '}
        <S.Line>TDD</S.Line>, <S.Line>Data Science</S.Line> são algumas
        áreas/tecnologias que venho aprimorando meu conhecimento.
      </p>

      <p>
        Estou sempre buscando melhorar meus conhecimentos e sempre disposto a
        ajudar os outros. Caso você queria entrar em contato comigo para
        conversar sobre programação ou conhecer um pouco mais sobre mim, você
        pode me encontrar em: <S.Line>Linkedin</S.Line>,{' '}
        <S.Line>Twitter</S.Line> (Embora ultimamente não utilize muito),{' '}
        <S.Line>Github</S.Line>.
      </p>
    </S.About>
  );
};

export default AboutBody;
