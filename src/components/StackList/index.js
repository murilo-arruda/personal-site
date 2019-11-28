import React, { useContext, useEffect } from 'react';
import SkillsContext from 'context/skills/skillsContext';
import * as S from './styled';

const StackList = () => {
  const { skills } = useContext(SkillsContext);
  useEffect(() => {}, [skills]);
  return (
    <S.Wrapper>
      {Object.keys(skills).map(key =>
        !skills[key].special && skills[key].icon ? (
          <S.SvgCustomize shouldHighlight={skills[key].isActive} key={key}>
            {skills[key].icon}
          </S.SvgCustomize>
        ) : null
      )}
    </S.Wrapper>
  );
};

export default StackList;
