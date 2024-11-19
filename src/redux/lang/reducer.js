import { CHANGE_LANGUAGE } from './actions';

// State awal
const initialState = {
  language: 'en', // Default bahasa: Inggris
};

// Reducer
const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    default:
      return state;
  }
};

export default langReducer;
