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
  const [current, setCurrent] = useState([]);
  useEffect(() => {
    if (current) {
      if (skillsTable[current].special) {
        skillTable[current].special.map(skill => toggle(skill));
      } else {
        toggle(current);
      }
    } else {
      if (skills !== null) {
        if (skillsTable[skills].special) {
          skillTable[skills].special.map(skill => toggle(skill));
        } else {
          toggle(skills);
        }
      }
    }
  }, [skills]);

  const toggle = skill => {
    let isActive = true;
    if (current === skill) {
      setCurrent(null);
      isActive = false;
    } else {
      setCurrent(skill);
    }
    setSkillActive({
      ...skillsTable,
      [skill]: { ...skillsTable[skill], isActive },
    });
  };
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
