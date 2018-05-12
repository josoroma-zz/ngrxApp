import { AppActionTypes, All } from '../actions/app.actions';

export interface State {
  testMe: string | null;
}

export const initialState: State = {
  testMe: ''
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AppActionTypes.TEST_ME: {
      return {
        ...state,
        testMe: action.payload.testMe
      };
    }
    default: {
      return state;
    }
  }
}
