import React, { useContext } from 'react';
import SkillsContext from 'context/skills/skillsContext';

const StackList = () => {
  const { skills } = useContext(SkillsContext);
  return skills ? <p>{skills}</p> : null;
};

export default StackList;
