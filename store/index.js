
import { createStore } from 'redux';
import thunk from 'redux-thunk';

const reducer = (state = 0, action ) => {
  switch (action.type) {
    case 'INCREMENT': 
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default: 
      return state;  
  }
}

const initializeStore = initialState => {
  return createStore(reducer, initialState);
};

export default initializeStore;


