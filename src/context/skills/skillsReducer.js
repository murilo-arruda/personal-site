const reducer = (state, action) => {
  switch (action.type) {
    case 'active':
      if (state[action.payload].special) {
        return specialToggle(state, state[action.payload].special);
      }
      return {
        ...state,
        [action.payload]: { ...state[action.payload], isActive: true },
      };
    case 'deactive':
      if (state[action.payload].special) {
        return specialToggle(state, state[action.payload].special);
      }
      return {
        ...state,
        [action.payload]: { ...state[action.payload], isActive: false },
      };
    default:
      return state;
  }
};

const specialToggle = (state, skillsToActivate) => {
  const activatedSkills = Object.assign(
    {},
    ...skillsToActivate.map(skill => {
      return { [skill]: { ...state[skill], isActive: !state[skill].isActive } };
    })
  );
  return { ...state, ...activatedSkills };
};
export default reducer;
