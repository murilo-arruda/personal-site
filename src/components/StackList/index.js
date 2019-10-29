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
      {Object.keys(skills).map(key =>
        !skills[key].special ? (
          <Checker shouldHighlight={skills[key].isActive} key={key}>
            {key}{' '}
          </Checker>
        ) : null
      )}
    </div>
  );
};

export default StackList;
