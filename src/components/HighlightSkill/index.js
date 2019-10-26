import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import * as V from 'styles/variables';
import SkillsContext from 'context/skills/skillsContext';
const Line = styled.strong`
  text-decoration: underline;
  text-decoration-color: ${V.Color.pinkRedNeon};
`;
const HighlightSkill = ({ children, skillName }) => {
  const skillsContext = useContext(SkillsContext);

  const handleOnMouseEnter = () => {
    skillsContext.highlight(skillName ? skillName : children);
  };
  const handleOnMouseOut = () => {
    skillsContext.removeHL();
  };

  return (
    <Line onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
      {children}
    </Line>
  );
};

export default HighlightSkill;
