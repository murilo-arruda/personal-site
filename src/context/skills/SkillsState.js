import React, { useReducer } from 'react';
import skillsReducer from './skillsReducer';
import SkillsContext from './skillsContext';

const SkillsState = props => {
  const initialState = null;
  const [state, dispatch] = useReducer(skillsReducer, initialState);

  const highlight = skill => {
    dispatch({
      type: 'add',
      payload: skill,
    });
  };

  const removeHL = () => {
    dispatch({ type: 'remove' });
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
