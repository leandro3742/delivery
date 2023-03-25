import { Reducer } from 'redux';
import { DTModal } from '../../assets/DataTypes/DTModal';
import { ModalActions, OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';

const initialState: DTModal = { show: false, data: null, action: null }

export const ModalReducer: Reducer<DTModal, ModalActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return action.payload;

    case CLOSE_MODAL:
      return action.payload;
    default:
      return state;
  }
};