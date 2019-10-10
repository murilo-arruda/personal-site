import React from 'react';
import { Linkedin, Twitter, GitHub } from 'react-feather';
import * as S from './styled';
const SocialList = () => {
  return (
    <S.Social>
      {' '}
      {/*socialList */}
      <a
        href="https://www.linkedin.com/in/muriloarruda/"
        target="_blank"
        rel="noopener noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        href="https://twitter.com/passocabr"
        target="_blank"
        rel="noopener noopener noreferrer"
      >
        <Twitter />
      </a>
      <a
        href="https://github.com/murilo-arruda"
        target="_blank"
        rel="noopener noopener noreferrer"
      >
        <GitHub />
      </a>
    </S.Social>
  );
};

export default SocialList;
