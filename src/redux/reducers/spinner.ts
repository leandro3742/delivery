import { Reducer } from 'redux';
import { CLOSE_SPINNER, OPEN_SPINNER, SpinnerActions } from '../actions/spinner';

const initialState: boolean = false

export const SpinnerReducer: Reducer<boolean, SpinnerActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OPEN_SPINNER:
      return true;

    case CLOSE_SPINNER:
      return false;
    default:
      return state;
  }
};