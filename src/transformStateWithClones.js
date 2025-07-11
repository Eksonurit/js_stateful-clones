'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const stateArray = [];
  let currnetState = { ...state };
  let newState;

  for (const action of actions) {
    if (action.type === 'addProperties') {
      newState = { ...currnetState, ...action.extraData };
      stateArray.push(newState);
    }

    if (action.type === 'removeProperties') {
      newState = { ...currnetState };

      for (const keys of action.keysToRemove) {
        delete newState[keys];
      }
      stateArray.push(newState);
    }

    if (action.type === 'clear') {
      newState = {};
      stateArray.push(newState);
    }

    currnetState = newState;
  }

  return stateArray;
}

module.exports = transformStateWithClones;
