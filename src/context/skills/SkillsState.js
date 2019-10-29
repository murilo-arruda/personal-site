import React, { useReducer } from 'react';
import skillsReducer from './skillsReducer';
import SkillsContext from './skillsContext';
import skillTable from 'utils/skillTable';
const SkillsState = props => {
  const initialState = { ...skillTable };
  const [state, dispatch] = useReducer(skillsReducer, initialState);

  const highlight = skill => {
    dispatch({
      type: 'active',
      payload: skill.toUpperCase(),
    });
  };

  const removeHL = skill => {
    dispatch({ type: 'deactive', payload: skill.toUpperCase() });
  };

  return (
    <SkillsContext.Provider
      value={{
        skills: state,
        highlight,
        removeHL,
      }}
    >
      {props.children}
    </SkillsContext.Provider>
  );
};

export default SkillsState;
