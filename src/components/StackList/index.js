import React, { useContext, useEffect, useState } from 'react';
import SkillsContext from 'context/skills/skillsContext';
import * as S from './styled';

const StackList = () => {
  const { skills } = useContext(SkillsContext);
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    setHighlight(Object.keys(skills).some(key => skills[key].isActive));
  }, [skills]);
  return (
    <S.Wrapper highlight={highlight}>
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
