import React, { useContext } from 'react';
import styled from 'styled-components';
import * as V from 'styles/variables';
import SkillsContext from 'context/skills/skillsContext';
const Line = styled.strong`
  text-decoration: underline;
  text-decoration-color: ${V.Color.pinkRedNeon};
`;
const HighlightSkill = ({ children }) => {
  const skillsContext = useContext(SkillsContext);
  const handleOnMouseEnter = () => {
    console.log(children);
    skillsContext.highlight(children);
  };

  return <Line onMouseEnter={handleOnMouseEnter}>{children}</Line>;
};

export default HighlightSkill;
