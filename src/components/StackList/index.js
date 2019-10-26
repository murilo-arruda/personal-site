import React, { useContext, useEffect, useState } from 'react';
import SkillsContext from 'context/skills/skillsContext';
import styled from 'styled-components';
import skillTable from 'utils/skillTable';

const Checker = styled.span`
  background-color: ${props => (props.shouldHighlight ? 'red' : 'inherit')};
`;

const StackList = () => {
  const { skills } = useContext(SkillsContext);
  const [skillsTable, setSkillActive] = useState(skillTable);
  const [current, setCurrent] = useState(null);
  useEffect(() => {
    if (current) {
      setSkillActive({ ...skillsTable, [current]: { isActive: false } });
      setCurrent(null);
    } else {
      if (skills !== null) {
        setSkillActive({ ...skillsTable, [skills]: { isActive: true } });
        setCurrent(skills);
      }
    }
  }, [skills]);
  return (
    <div>
      {Object.keys(skillsTable).map(key => {
        return key ? (
          <Checker shouldHighlight={skillsTable[key].isActive} key={key}>
            {key}{' '}
          </Checker>
        ) : null;
      })}
    </div>
  );
};

export default StackList;
