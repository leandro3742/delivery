import { combineReducers } from 'redux';
import { DTCart } from '../../assets/DataTypes/DTCart';
import { DTModal } from '../../assets/DataTypes/DTModal';
import { CartReducer } from '../reducers/cart';
import { ModalReducer } from '../reducers/modal';
import { SpinnerReducer } from './spinner';

export interface AppState {
  cart: Array<DTCart>
  modal: DTModal,
  spinner: boolean
}

const rootReducer = combineReducers<AppState>({
  cart: CartReducer,
  modal: ModalReducer,
  spinner: SpinnerReducer
});

export default rootReducer;