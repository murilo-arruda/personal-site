import React, { useContext } from 'react';
import styled from 'styled-components';
import * as V from 'styles/variables';
import SkillsContext from 'context/skills/skillsContext';
const Line = styled.strong`
  text-decoration: underline;
  text-decoration-color: ${V.Color.pinkRedNeon};
`;
const HighlightSkill = ({ children, skillName }) => {
  const skillsContext = useContext(SkillsContext);
  const skill = skillName ? skillName : children;
  const handleOnMouseEnter = () => {
    skillsContext.highlight(skill);
  };
  const handleOnMouseOut = () => {
    skillsContext.removeHL(skill);
  };

  return (
    <Line onMouseEnter={handleOnMouseEnter} onMouseOut={handleOnMouseOut}>
      {children}
    </Line>
  );
};

export default HighlightSkill;
