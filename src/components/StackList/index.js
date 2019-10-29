import React, { useContext, useEffect } from 'react';
import SkillsContext from 'context/skills/skillsContext';
import styled from 'styled-components';
const Checker = styled.span`
  background-color: ${props => (props.shouldHighlight ? 'red' : 'inherit')};
`;

const StackList = () => {
  const { skills } = useContext(SkillsContext);
  useEffect(() => {}, [skills]);
  return (
    <div>
      {Object.keys(skills).map(key => (
        <Checker shouldHighlight={skills[key].isActive} key={key}>
          {key}{' '}
        </Checker>
      ))}
    </div>
  );
};

export default StackList;
